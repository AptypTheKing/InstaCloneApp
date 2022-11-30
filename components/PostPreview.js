import React, { memo } from 'react'
import { Image, Pressable, StyleSheet, Dimensions } from 'react-native'

const win = Dimensions.get('window')
imageWidth = win.width / 3

const PostPreview = (props) => {
  return (
    <Pressable onPress={() =>
    (props.navigation.navigate('Post', {
      user: props.route.params.user ? props.route.params.user : props.user, photo: props.photo
    }))}>
      <Image source={{ uri: props.photo.thumbnailUrl }} style={{height: 140, width: imageWidth }} />
    </Pressable>
  )
}

export default memo(PostPreview)

const styles = StyleSheet.create({})