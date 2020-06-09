import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import { useFirebase, useFirebaseConnect, useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import FlashcardsScreenPractice from '../screens/FlashcardsPracticeScreen'

export default function FlashcardsScreen({ navigation }) {
  const projects = useSelector((state) => state.project.projects)

  return (
    <FlatList 
      data={projects}
      numColumns={2}
      renderItem={({item}) => (
        <View style={{width: '50%'}}>
          <TouchableOpacity onPress={() =>{ navigation.navigate('FlashcardsPracticeScreen', item)}}>
            <Card>
              <View style={{height: 100, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>  
                <Text style={styles.deck}>{ item.title }</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#3F448C'
  },
  deck: {
    textAlign: 'center',
  }
})