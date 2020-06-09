import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import FlashcardsScreen from '../screens/FlashcardsScreen'
import FlashcardsPracticeScreen from '../screens/FlashcardsPracticeScreen'

const Stack = createStackNavigator()

export default function FlashcardsStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Flashcards" 
        component={FlashcardsScreen} 
        options={{...styles,
            ...titleStyle,
            title: 'Advanced language practice',
            headerLeft: () => 
              <TouchableOpacity
                onPress={() => props.navigation.openDrawer()}
                style={{marginLeft: 8}}
              >
                <Feather name='menu' size={24} color={'white'}/>
              </TouchableOpacity>
            }}
        />
      <Stack.Screen 
        name="FlashcardsPracticeScreen" 
        component={FlashcardsPracticeScreen} 
        options={
        ({ route }) => ({ title: route.params.title })
        }
        />
    </Stack.Navigator>
  );
}

const styles = {headerStyle: {backgroundColor: '#3F448C'}}
const titleStyle = {headerTitleAlign: 'center', headerTintColor: 'white', fontWeight: 'bold'}