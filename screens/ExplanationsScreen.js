import React, {useState} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import Card from '../components/Card'
//import db from '../services/firebase'
import displayText from '../components/displayText'
import Unit1 from '../components/Unit1'

export default function ExplanationsScreen(){
    // const key = 'unit_1'
    // const [Unit1, setUnit1] = useState([])
    // db.collection('contents').doc(key).get().then((snapshot) => {
    //     setUnit1(snapshot.data().explanation)
    //     console.log(snapshot.data().questions)
    // })
    return(
        <View style={{flex: 1}}>
            <FlatList 
                data = {Unit1}
                renderItem = {({item}) =>
                    <Card>
                        <Text style={{fontWeight: 'bold', color: '#3F448C'}}>{item.title}</Text>
                        {item.sub_explanation.map((value) => {
                            return(
                            <View>
                                {displayText(value.title)}
                                {value.examples.map((value) => {
                                    return(
                                        <Text style={styles.italic}>
                                        {displayText('      '+value)}
                                        </Text>
                                    )
                                })}
                            </View>
                            )
                        })}
                    </Card>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
})