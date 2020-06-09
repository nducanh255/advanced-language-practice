import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Card from '../components/Card'
import shuffle from '../components/shuffle'
import deck from '../assets/deck'

export default function FlashcardsPracticeScreen(){
    const [flashcards, setFlashcards] = useState(deck)
    const [displayedFlashcards, setDisplayedFlashcard] = useState(shuffle(flashcards.concat()))
    
    const terms = []
    flashcards.forEach((flashcard) => {
        terms.push({term: flashcard.term})
    })
    const defs = []
    displayedFlashcards.forEach((flashcard) => {
        defs.push({def: flashcard.def})
    })

    const [chooseFlashcard, setChooseFlashcard] = useState({term: '', def: ''})
    const match = {term: chooseFlashcard.term, def: chooseFlashcard.def}

    if(JSON.stringify(flashcards[chooseFlashcard.id]) === JSON.stringify(match)){
        setDisplayedFlashcard(displayedFlashcards.filter((flashcard) => flashcard !== flashcards[chooseFlashcard.id]))
        setFlashcards(flashcards.filter((flashcard) => flashcard !== flashcards[chooseFlashcard.id]))
        setChooseFlashcard({term: '', def: ''})
    }

    if(flashcards.length > 1){
    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
                <FlatList
                    data={terms}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            onPress={() => setChooseFlashcard(
                                {...chooseFlashcard, 
                                term: item.term, id: index})}
                        >
                            <Card>
                                <View style={styles.termContainer}>
                                    <Text style={styles.term}>{item.term}</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{width: '50%'}}>
                <FlatList
                    data={defs}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => setChooseFlashcard({...chooseFlashcard, def: item.def})}
                        >
                            <Card>
                                <View>
                                    <Text>{item.def}</Text>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
    }
    else{ 
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Well done !!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    termContainer: {
        justifyContent: 'center',
        height: 50
    },
    term: {
        textAlign: 'center'
    }
})