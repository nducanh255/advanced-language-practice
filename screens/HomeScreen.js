import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import content from '../components/data'
import Card from '../components/Card'

export default function HomeScreen({ navigation }) {
  return (
      <FlatList 
        data={content}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() =>{ navigation.navigate('Unit', item)}}>
            <Card>  
              <Text>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#3F448C'
  }
})