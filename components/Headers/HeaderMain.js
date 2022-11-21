import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderMain = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Instagram</Text>
      <View style={styles.iconsHeader}>
        <AntDesign
          name='pluscircleo'
          size={24}
        />
        <AntDesign
          name='hearto'
          size={24}
        />
        <AntDesign
          name='message1'
          size={24}
        />
        </View>
    </View>
  )
}

export default HeaderMain

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginLeft: -16
  }, 
  textHeader: {
    fontSize: 28,
    marginLeft: 15
  },
  iconsHeader: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})