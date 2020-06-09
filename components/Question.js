import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {RadioButton} from 'react-native-paper'

export default function Question(props) {
    const [check, setCheck] = useState('')
    props.onAnswer(props.question.title, check)

    return (
        <View style={styles.questionForm}>
            <Text>
                <Text style={styles.questionTitle}>{'Question ' + props.index + ': '}</Text>
                <Text>{props.question.title}</Text>
            </Text>
            <RadioButton.Group
                onValueChange={(value) => setCheck(value)}
                value={check}
            >
            <FlatList 
                data = {props.question.options}
                renderItem = { ({item}) => (
                <View style={styles.answer}>
                    <RadioButton 
                        value={item.key}
                        color='#3F448C'
                    />
                    <TouchableOpacity onPress={() => {setCheck(item.key)}}>
                        <Text>{item.key}</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
            </RadioButton.Group>
        </View>
    )
}

const styles = StyleSheet.create({
    questionForm: {
        paddingHorizontal: '5px'
    },
    questionTitle: {
        paddingVertical: 5,
        fontWeight: 'bold',
        color: '#3F448C'
    },
    answer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: -5
    }
})