import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Question from '../components/Question'
import Solution from '../components/Solution'
import Card from '../components/Card'
import questions from '../assets/questions'

export default function ExercisesScreen(){
    const [checkedAnswers, setCheckedAnswers] = useState([])
    const [isSubmitAnswer, setSubmitAnswer] = useState(false)

    const answers = questions.map((question) => {
        return {...question, choosedOption: ''}
    })
    const handleAnswer = (title, checked) => {
        answers.forEach((answer) => {
            if(answer.title === title){
                answer.choosedOption = checked
            }
        })
        setCheckedAnswers(answers)
    }
    
    if(!isSubmitAnswer){
        return(
            <View style={{flex: 1}}>
                <FlatList 
                    data = {questions}
                    renderItem = {({item, index}) =>
                        <Card>
                            <Question index={index + 1} question={item} onAnswer={handleAnswer}/>    
                        </Card>
                    }
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {setSubmitAnswer(true)}}
                    >
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <View style={{flex: 1}}>
            <FlatList 
                data = {checkedAnswers}
                renderItem = {({item, index}) =>
                    <Card>
                        <Solution index={index + 1} solution={item}/>    
                    </Card>
                }
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {setSubmitAnswer(false)}}
                >
                    <Text style={styles.buttonText}>REDO</Text>
                </TouchableOpacity>
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection:'row', 
        justifyContent: 'center',
        //backgroundColor: '#3F448C'
    },
    button: {
        width: '95%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor:'#3F448C',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3F448C',
        alignSelf: 'baseline',
        justifyContent: 'center',
        
        borderRadius: 4,
        elevation: 3,
        shadowOffset: { width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 3,
        marginHorizontal: 6,
        marginTop: 4,
        marginBottom: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})