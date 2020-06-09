import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {RadioButton} from 'react-native-paper'

export default function Solution(props){
    return(
        <View style={styles.questionForm}>
            <Text>
                <Text style={styles.questionTitle}>{'Question ' + props.index + ': '}</Text>
                <Text>{props.solution.title}</Text>
            </Text>
            <RadioButton.Group
                value={props.solution.choosedOption || props.solution.rightOption}
            >
            <FlatList 
                data = {props.solution.options}
                renderItem = { ({item}) => (
                <View style={styles.answer}>
                    <RadioButton 
                        value={item.key} 
                        color={
                            (props.solution.rightOption === props.solution.choosedOption && item.key === props.solution.choosedOption)?
                            'green' : 
                            (props.solution.rightOption !== props.solution.choosedOption && item.key === props.solution.choosedOption)?
                            'red' : 'gray'
                        }
                    />
                    <Text style={
                        (props.solution.choosedOption === '' && item.key === props.solution.rightOption)?
                        {color: 'gray'}:
                        (props.solution.rightOption === props.solution.choosedOption && item.key == props.solution.choosedOption)?
                        {color: 'green'} : 
                        (props.solution.rightOption !== props.solution.choosedOption && item.key == props.solution.choosedOption)?
                        {color: 'red'} : {color: 'black'}}
                    >
                        {item.key}
                    </Text>
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
        paddingVertical: '5px',
        fontWeight: 'bold',
        color: '#3F448C'
    },
    answer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: -5
    }
})