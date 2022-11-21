import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainUser from './MainUser'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Navbar from './Navbar'
import MainStack from './Stacks/MainStack'
import UserStack from './Stacks/UserStack'
import SplashScreen from 'react-native-splash-screen'

const Tab = createBottomTabNavigator()

const TabsBottom = () => {
  const EmptyTab = () => {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
        <Tab.Screen
          name='MainStack'
          component={MainStack} 
          options={{tabBarIcon: ({focused}) => (<Ionicons name={focused ? 'ios-home-sharp' : 'ios-home-outline'} size={28} />)}}
        />
        <Tab.Screen name='Search' component={EmptyTab} options={{tabBarIcon: ({focused}) => <Ionicons name={focused ? 'ios-search-sharp' : 'ios-search-outline'} size={28}/>}} />
        <Tab.Screen name='Reels' component={EmptyTab} options={{tabBarIcon: ({focused}) => <AntDesign name={focused ? 'play' : 'playcircleo'} size={28}/>}}/>
        <Tab.Screen name='Shop' component={EmptyTab} options={{tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'shopping' : 'shopping-outline'} size={28}/>}}/>
        <Tab.Screen
          name='UserStack'
          component={UserStack}
          options={{tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'account-circle' : 'account-circle-outline'} size={28} />}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabsBottom

const styles = StyleSheet.create({})