import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRiple, Switch} from 'react-native-paper'
import { Feather } from '@expo/vector-icons'

export function DrawerContent(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flowDirection: 'column'}}>
                                <Title style={styles.title}>Username</Title>
                                <Caption style={styles.caption}>@user.email</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.section}>
                        <DrawerItem 
                        icon={(color, size) => (
                            <Feather
                            name='home'
                            size={24}
                            color={color}
                        />)}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                        icon={(color, size) => (
                            <Feather
                            name='layers'
                            size={24}
                            color={color}
                        />)}
                        label='Flashcards'
                        onPress={() => {props.navigation.navigate('Flashcards')}}
                        />
                        <DrawerItem 
                        icon={(color, size) => (
                            <Feather
                            name='flag'
                            size={24}
                            color={color}
                        />)}
                        label='Guide'
                        onPress={() => {props.navigation.navigate('Guide')}}
                        />
                        <DrawerItem 
                        icon={(color, size) => (
                            <Feather
                            name='bookmark'
                            size={24}
                            color={color}
                        />)}
                        label='Bookmarks'
                        onPress={() => {props.navigation.navigate('Bookmarks')}}
                        />
                        <DrawerItem 
                        icon={(color, size) => (
                            <Feather
                            name='search'
                            size={24}
                            color={color}
                        />)}
                        label='Glossary'
                        onPress={() => {props.navigation.navigate('Dictionary')}}
                        />
                        <DrawerItem 
                        icon={(color, size) => (
                            <Feather
                            name='heart'
                            size={24}
                            color={color}
                        />)}
                        label='Support'
                        onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={(color, size) => (
                        <Feather
                        name='log-out'
                        size={24}
                        color={color}
                    />)}
                    label='Sign Out'
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 12,
      lineHeight: 10,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
})