import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import User from '../User'
import HeaderMain from '../Headers/HeaderMain'
import HeaderMainUser from '../Headers/HeaderMainUser'
import PostList from '../PostList'
import HeaderUser from '../Headers/HeaderUser'
import Feather from 'react-native-vector-icons/Feather'
import Post from '../Post'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={PostList} 
          options={{ headerTitle: () => <HeaderMain/>, }} />
        <Stack.Screen name='User' component={User}
          options={({ route }) => ({
            headerTitle: () => <HeaderUser {...route.params} />,
            headerRight: () => <Feather name='more-horizontal' size={24}/>
          })}
        />
        <Stack.Screen name='Post' component={Post}
          // options={{ headerTitle: (props) => <HeaderUser {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack

const styles = StyleSheet.create({})


