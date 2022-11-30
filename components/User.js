import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import UserPost from './UserPost'

const User = ({ navigation, route }) => {

  const [page, setPage] = useState(1)

  const [isRefreshing, setIsRefreshing] = useState(false)

  const [post, setPost] = useState([])
  const [photo, setPhoto] = useState([])
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

const fetchData = async () => {
  try {
    let responseUser = await axios.get('https://jsonplaceholder.typicode.com/users')
    let responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let responsePhoto = await axios.get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
    setPost(responsePost.data)
    setPhoto(responsePhoto.data)
    setUser(responseUser.data)
  } catch (e) {
    alert(e)
  } finally {
    setIsLoading(false)
  }
}
  
  const fetchMoreData = async () => {
  let responseMoreData = await axios.get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
  setPhoto((photos) => [...photos, ...responseMoreData.data])
  console.log('fetchingMoreData')
}
  
  const dataRefresh = () => {
    setPage(1)
    setIsRefreshing(true)
  }

  const nextPage = () => {
    if (page == 3) {
      return
    } else {
      setPage(page + 1)
    }
  }


  useEffect(() => {
    if (page == 1) {
      if (isRefreshing) {
        fetchData()
        setTimeout(() => setIsRefreshing(false), 500)
      }
    } else {
      fetchMoreData()
    }
  }, [page, isRefreshing])

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
      {isLoading
        ? <ActivityIndicator size='large' color='blue'/>
        : <UserPost props={{ post, photo, user, page, route, navigation, dataRefresh, isRefreshing, nextPage}} />
      }  
      </View>
  )
}

export default User

const styles = StyleSheet.create({
  
})