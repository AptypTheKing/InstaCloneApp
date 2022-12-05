import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Post = (props) => {

  const route = props.route.params

  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState((Math.round(Math.random() * 100)))
  const [isFullPostDescription, setIsFullPostDescription] = useState(false)
  const [postAuthor, setPostAuthor] = useState()

  useEffect(() => {
    if (route) {
      setPostAuthor(route.user)
    } else {
      setPostAuthor(props.user[(Math.round(Math.random() * 9))])
    }
  }, [route])

  const navigationState = props.navigation.getState()
  const firstRoute = navigationState.routeNames[0]

  const likePost = () => {
    {isLiked 
      ? (setIsLiked((isLiked) => !isLiked),
        setLikes((likes) => likes - 1))
      : (setIsLiked((isLiked) => !isLiked),
        setLikes((likes) => likes + 1))
      }
  }

  return (
    <View>
      <View style={styles.postHeader}>
        <Image source={{ uri: route ? route.photo.thumbnailUrl : props.photo.thumbnailUrl }} style={styles.imageHeader} />
        <TouchableOpacity onPress={() => (
            firstRoute == 'MainUser'
            ? props.navigation.goBack()
            : props.navigation.navigate('User', { user: postAuthor })
          )}>
          <Text style={styles.textHeader}>
            {route 
            ? route.user.name
            : postAuthor ? postAuthor.name : null
            }
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={{uri: route ? route.photo.url : props.photo.url}} style={{ width: '100%', height: 400,}} />
        <View>
          <View style={styles.iconsBelowPost}>
          <View style={styles.iconsLeft}>
            <TouchableWithoutFeedback
              onPress={likePost}>
              <View>
                <AntDesign
                name={isLiked ? "heart" : 'hearto'}
                color={isLiked ? 'red' : 'black'}
                  size={24} />
              </View>
              </TouchableWithoutFeedback>
            <FontAwesome5 name='comment' size={24} />
            <Feather name='send' size={24} />
          </View>
          <View style={styles.iconsRight}>
            <FontAwesome name='bookmark-o' size={24} />
          </View>
        </View>
        </View>
      <View style={styles.likes}>
        <Text>Likes: </Text>
        <Text style={{ fontWeight: 'bold' }}>{likes}</Text>
      </View>
      <View style={styles.postDescription}>
        <Text style={{ fontWeight: 'bold' }}>
          {route
            ? route.user.name
            : postAuthor ? postAuthor.name : null + ' '} 
        </Text>
        <Text onPress={() => setIsFullPostDescription(true)}>
          {isFullPostDescription
            ? route ? route.photo.title : props.photo.title
            : route ? (route.photo.title.length > 20 &&
                        route.photo.title.slice(0, 20) + '...') 
                    : (props.photo.title.length > 20 &&
                        props.photo.title.slice(0, 20) + '...')
          }
        </Text>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  likes: {
    marginLeft: 15,
    marginVertical: 5,
    flexDirection: 'row'
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginVertical: 10,

  },
  textHeader: {
    marginLeft: 10,
    textDecorationLine: 'underline',
    fontSize: 16
  },
  imageHeader: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  iconsBelowPost: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsLeft: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 140,
  },
  iconsRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15
  },
  postDescription: {
    marginLeft: 15,
    marginVertical: 5,
  }
})