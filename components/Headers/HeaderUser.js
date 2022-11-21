import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderUser = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{props.user ? props.user.name : null}</Text>
    </View>
  )
}

export default HeaderUser

const styles = StyleSheet.create({
  header: {
    paddingBottom: 5,
  }, 
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold'
  },
})