import React, {useEffect, useState} from 'react'
import { FlatList, Image, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import StoriePreview from './StoriePreview'

const Stories = (props) => {

  return (
    <View >
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.photo} 
      renderItem={({ item }) => (
        <StoriePreview photo={item} user={props.user} route={props.route} />
      )} />      
    </View>)
}

export default Stories

const styles = StyleSheet.create({
  
})