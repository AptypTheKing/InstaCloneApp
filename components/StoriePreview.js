import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

const StoriePreview = ({ photo, user, route }) => {

  const [storieAuthor, setStorieAuthor] = useState(user[(Math.round(Math.random() * 9))])

  const StorieText = () => {
    if (user.length > 1) {
      return (
        <Text Text style={styles.text}>
        {storieAuthor.name.length > 10
          ? storieAuthor.name.slice(0, 10) + '...'
          : storieAuthor.name
        }
        </Text>)
    } else {
      return null
    }
  }

  return (
    <View style={styles.storie}>
      <View style={styles.storiesPreview}>
        <Image source={{ url: photo.thumbnailUrl }} style={styles.storiesImage} />
      </View>
      {!route ? <StorieText /> : null}
    </View>
  )
}

export default StoriePreview

const styles = StyleSheet.create({
  storie: {
    marginHorizontal: 3
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333'
  },
  storiesPreview: {
    borderWidth: 28,
    borderRadius: 50,
    borderColor: '#ff6699',
    width: 50,
    height: 50,
    margin: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  storiesImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }
})