import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import Definition from '../components/Definition'
import Card from '../components/Card'
import dictionary from '../assets/dictionary'

export default function DictionaryScreen(){
    const [meaning, setMeaning] = useState({})

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput 
                mode={"outlined"}
                selectionColor={'black'}
                underlineColor={'black'}
                style={styles.input}
                placeholder={'Enter search term'}
                onChangeText={(text) => setMeaning(dictionary[text])}
            />
            </View>
            {
                (typeof meaning === 'object') ?
                <Definition definition={meaning}/> :
                <Text>Not found!</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'column',
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: '#3F448C',
        width: '100%',
        marginTop: -5,
        justifyContent: 'row',
        alignItems: 'center'
    },
    input: {
        height: 30,
        width: '95%',
        backgroundColor: 'white',
        marginVertical: 5
    },
})