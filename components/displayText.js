import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function displayText(text){
    if(text.includes('<n>')){
        return(
            <Text>
                {text.split('<n>').map((value) => {
                return <View><Text>{value}</Text></View>
                })}
            </Text>
        )
    }
    else if(text.includes('<b>')){
    return(
        <Text>
            {text.split('<b>').map((value, index) => {
                return (index % 2 == 0) ? 
                    <Text>{value}</Text> :
                    <Text style={styles.bold}>{value}</Text>
            })}
        </Text>
    )}
    else if(text.includes('<i>')){
    return(
        <Text>
            {text.split('<i>').map((value, index) => {
                return (index % 2 == 0) ? 
                    <Text>{value}</Text> :
                    <Text style={styles.italic}>{value}</Text>
            })}
        </Text>
    )}
    else if(text.includes('<u>')){
    return(
        <Text>
            {text.split('<u>').map((value, index) => {
                return (index % 2 == 0) ? 
                    <Text>{value}</Text> :
                    <Text style={styles.underline}>{value}</Text>
            })}
        </Text>
    )}
    else 
    return(
        <Text>{text}</Text>
    )
}

const styles = StyleSheet.create({
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
})