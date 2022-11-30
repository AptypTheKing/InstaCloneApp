import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Stories from '../Stories'

const followers = Math.round(Math.random() * 1000)
const following = Math.round(Math.random() * 1000)

const UserTopHeader = (props) => {

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.topBar} >
        <Image source={{ uri: props.isLoading ? null : props.photo[1].thumbnailUrl }} style={styles.imageAvatar} />
        <View style={styles.textTopBar}>
          <Text style={styles.text}>{props.post.length}{'\n'}Posts</Text>
          <Text style={styles.text}>{followers}{'\n'}Followers</Text>
          <Text style={styles.text}>{following}{'\n'}Following</Text>
        </View> 
      </View>
      <View style={styles.accountBio}>
        <Text>Account information</Text>
      </View>
      <Pressable style={{ flexDirection: 'row'}}>
        <View style={styles.editProfile}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Edit Profile</Text>
        </View>
        <View style={styles.addFriends}><Ionicons name='person-add-outline' size={18} /></View>
      </Pressable>
      <Stories photo={props.photo} user={props.user} route={props.route} />
    </View>
  )
}

export default UserTopHeader

const styles = StyleSheet.create({
  imageAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 15,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  textTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
  },
  text: {
    width: 70,
    textAlign: 'center',
    margin: 5
  },
  accountBio: {
    margin: 15
  },
  editProfile: {
    backgroundColor: '#e6e6e6',
    width: 325,
    height: 30,
    marginVertical: 5,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  addFriends: {
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    marginVertical: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
  bottomBar: {
    flexDirection: 'row', 
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})