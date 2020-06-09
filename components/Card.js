import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: { width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginHorizontal: 6,
        marginTop: 4,
        marginBottom: 4
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
})