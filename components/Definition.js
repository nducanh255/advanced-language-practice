import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import displayText from '../components/displayText'
import Card from '../components/Card'

export default function Definition(props){
    return(
        <View style={styles.container}>
            <Card>
                <View style={styles.header}>
                    <Text>
                        <Text>{props.definition.level} </Text>
                        <Text>{props.definition.partOfSpeech} </Text>
                        <Text>{props.definition.phonetics} </Text>
                    </Text>
                    {
                    (JSON.stringify(props.definition) !== JSON.stringify({})) &&
                    <View>
                        <Feather name="volume-2" size={20} color="black" />
                    </View>
                    }
                </View>
                <Text style={styles.meaning}>{props.definition.meaning}</Text>
                <FlatList
                    data={props.definition.examples}
                    renderItem={({item}) => (
                        <View style={styles.examplesContainer}>
                            <View style={styles.bulletPoint}></View>
                            <Text style={styles.examples}>{item}</Text>
                        </View>
                    )}
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'column',
        alignItems: 'center'
    },
    meaning : {
        fontWeight: 'bold',
        color: '#3F448C'
    },
    examples: {
        fontStyle: 'italic'
    },
    examplesContainer: {
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bulletPoint: {
        height: 6,
        width: 6, 
        borderRadius: 6 /2,
        backgroundColor: '#3F448C',
        margin: 8
    }
})
