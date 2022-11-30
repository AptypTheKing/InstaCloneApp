import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import Post from './Post'
import Stories from './Stories'

const PostList = ({ navigation, route }) => {

  const renderPost = ({item}) => {
    return (
      <Post
        photo={item}
        post={post}
        user={user}
        navigation={navigation} route={route} />
    )
  }

  const [post, setPost] = useState([])
  const [photo, setPhoto] = useState([])
  const [user, setUser] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  
  const fetchData = async () => {
    try {
      const [responseUser, responsePost, responsePhoto] = await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get(`https://jsonplaceholder.typicode.com/album/${page}/photos`)
      ])
      setUser(responseUser.data)
      setPost(responsePost.data)
      setPhoto(responsePhoto.data)
      setPage(page + 1)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchMoreData = async () => {
    if(page === 10) return
    let responseMoreData = await axios.get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
    setPhoto((list) => [...list, ...responseMoreData.data])
    setPage(page + 1)
    console.log('fetching')
  }

  const dataRefresh = async () => {
    setIsRefreshing(true)
    await fetchData()
    setIsRefreshing(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.main}> 
      {isLoading
        ? null
        : <FlatList
        refreshControl={<RefreshControl
          onRefresh={dataRefresh}
          refreshing={isRefreshing}
          tintColor={'blue'}  
        />}  
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.2}
        keyExtractor={(item) => item.id}
          ListHeaderComponent={<Stories photo={photo} user={user} />}
        ListHeaderComponentStyle={{}}
        bounces={true}
        showsVerticalScrollIndicator={false}
        data={photo}
        extraData={user}  
        renderItem={renderPost} />}
    </View>
  )
}

export default PostList

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
})