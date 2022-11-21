import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainUser from './components/MainUser';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsBottom from './components/TabsBottom';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {

  const hideSplashScreen = () => {
    setTimeout(() => SplashScreen.hide(), 500)
  }

  useEffect(() => {
    hideSplashScreen()
  }, [])

  return (
    <TabsBottom/>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green'
  }
});
