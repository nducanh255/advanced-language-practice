import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import DictionaryScreen from '../screens/DictionaryScreen'

const Stack = createStackNavigator();

export default function DictionaryStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Dictionary" 
        component={DictionaryScreen} 
        options={{
            ...styles,
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
    </Stack.Navigator>
  );
}

const styles = {headerStyle: {backgroundColor: '#3F448C'}}
const titleStyle = {headerTitleAlign: 'center', headerTintColor: 'white', fontWeight: 'bold'}