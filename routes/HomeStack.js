import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import UnitScreen from '../screens/UnitScreen'

const Stack = createStackNavigator();

export default function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
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
        name="Unit" 
        component={UnitScreen} 
        options={
        ({ route }) => ({ title: route.params.title })
        }
        />
    </Stack.Navigator>
  );
}

const styles = {headerStyle: {backgroundColor: '#3F448C'}}
const titleStyle = {headerTitleAlign: 'center', headerTintColor: 'white', fontWeight: 'bold'}