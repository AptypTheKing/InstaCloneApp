import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderMainUser = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{props.user ? props.user.name : null}</Text>
      <View style={styles.iconsHeader}>
        <AntDesign
          name='pluscircleo'
          size={24}
        />
        <Octicons
          name='three-bars'
          size={24}
        />
        </View>
    </View>
  )
}

export default HeaderMainUser

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    backgroundColor: 'white',
    width: '100%',
  }, 
  textHeader: {
    fontSize: 24,
    textDecorationLine: 'underline'
  },
  iconsHeader: {
    width: '22%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '7%'
  }
})