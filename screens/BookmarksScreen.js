import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import Card from '../components/Card'

export default function BookmarksScreen(){
    const [bookmarks, setBookmarks] = useState([])

    console.log(bookmarks)

    return (
        <View style={styles.container}>
            <TextInput 
                mode={"outlined"}
                selectionColor={'black'}
                underlineColor={'black'}
                style={styles.input}
                placeholder={'Add a bookmark'}
                onChangeText={(text) => setBookmarks(text, ...bookmarks)}
            />
            <FlatList 
                data = {bookmarks}
                renderItem = {({item}) => {
                    <Card>
                        <Text>{item}</Text>
                    </Card>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        height: 36,
        width: '95%',
        backgroundColor: 'white',
        marginVertical: 5
    }
})