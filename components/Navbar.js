import { AntDesign, Feather, MaterialCommunityIcons } from 'react-native-vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <AntDesign name='home' size={28} />
      <AntDesign name='search1' size={28} />
      <AntDesign name='playcircleo' size={28} />
      <Feather name='shopping-bag' size={28} />
      <MaterialCommunityIcons name={'account-circle-outline'} size={28} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  navbar: {
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
})