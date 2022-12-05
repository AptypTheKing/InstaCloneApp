import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import TabsBottom from './components/TabsBottom';

export default function App() {

  const hideSplashScreen = () => {
    setTimeout(() => (SplashScreen.hide(), setCurrentStyle(statusBarStyles[1])), 500)
  }

  const statusBarStyles = ['default', 'dark-content', 'light-content']
  const [currentStyle, setCurrentStyle] = useState(statusBarStyles[0])

  useEffect(() => {
    hideSplashScreen()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={currentStyle}/>
      <TabsBottom/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
});
