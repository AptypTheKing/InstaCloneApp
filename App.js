import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabsBottom from './components/TabsBottom';

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
