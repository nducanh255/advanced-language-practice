import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'
import displayText from '../components/displayText'
import questions from '../assets/questions'

export default function GuideScreen(props){
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    
    if(index < questions.length){
        return(
            <View style={styles.container}>
                <Card>
                    <View style={{backgroundColor: '#3F448C', height: 3, width: (index / questions.length) * 100  + '%', borderRadius: 10}}></View>
                </Card>
                <Card>
                    <View style={styles.question}>
                        <Text style={styles.questionTitle}>Question {index + 1}</Text>
                        <Text style={styles.questionContent}>
                            {displayText(questions[index].title.replace('...', '<u>                 <u>'))}
                        </Text>    
                    </View>
                </Card>
                <View style={styles.answer}>
                    <FlatList 
                        data={questions[index].options}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setIndex(index + 1)
                                    if(item.key === questions[index].rightOption) setScore(score + 1)
                                }}
                            >
                                <Card>
                                    <Text style={{textAlign: 'center'}}>{item.key}</Text>
                                </Card>
                            </TouchableOpacity>
                        )}
                    />    
                </View>
            </View>
        )
    }
    else {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Guide Screen Result {score / questions.length * 100}%</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Home')
                        setIndex(0)
                        setScore(0)
                    }}
                >
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    question: {
        height: 100
    },
    questionTitle: {
        color: '#3F448C',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10
    },
    questionContent: {
        textAlign: 'center'
    },
})