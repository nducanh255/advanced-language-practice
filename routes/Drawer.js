import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from './DrawerContent'
import HomeStack from './HomeStack'
import FlashcardsStack from './FlashcardsStack'
import GuideStack from './GuideStack'
import BookmarksStack from './BookmarksStack'
import DictionaryStack from './DictionaryStack'
import AboutStack from './AboutStack'

const Drawer = createDrawerNavigator()

export default function Navigator() {
  return(
    <NavigationContainer >
      <Drawer.Navigator 
        initialRouteName="HomeStack" 
        drawerContent={props => <DrawerContent {...props}/>}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Flashcards" component={FlashcardsStack} />
        <Drawer.Screen name="Guide" component={GuideStack} />
        <Drawer.Screen name="Bookmarks" component={BookmarksStack} />
        <Drawer.Screen name="Dictionary" component={DictionaryStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}