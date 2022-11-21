import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeaderMainUser from '../Headers/HeaderMainUser'
import MainUser from '../MainUser'
import Post from '../Post'

const Stack = createNativeStackNavigator()

const UserStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='MainUser' component={MainUser}
          options={({ route }) => ({ headerTitle: () => <HeaderMainUser {...route.params} />,  })} />
        <Stack.Screen name='Post' component={Post}
          // options={{ headerTitle: (props) => <HeaderUser {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default UserStack

const styles = StyleSheet.create({})