import React, { memo } from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

const PostPreview = (props) => {
  return (
    <Pressable onPress={() =>
    (props.navigation.navigate('Post', {
      user: props.route.params.user ? props.route.params.user : props.user, photo: props.photo
    }))}>
      <Image source={{uri: props.photo.thumbnailUrl}} style={{ width: 130, height: 130}}/>
    </Pressable>
  )
}

export default memo(PostPreview)

const styles = StyleSheet.create({})