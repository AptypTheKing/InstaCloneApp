import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import UserPost from './UserPost'

const MainUser = ({navigation, route}) => {

  const [page, setPage] = useState(1)

  const [post, setPost] = useState([])
  const [photo, setPhoto] = useState([])
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const[isRefreshing, setIsRefreshing] = useState(false)

  const passUser = async () => {
    await navigation.setParams({user})
  }
  
  const fetchData = async () => {
    try {
      let responseUser = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      let responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts')
      let responsePhoto = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
      setPost(responsePost.data)
      setPhoto(responsePhoto.data)
      setUser(responseUser.data)
      setPage(page + 1)
    } catch (e) {
      alert(e)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchMoreData = async () => {
    if (page === 4) return
    const responseMoreData = await axios.get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
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
    passUser()
  }, [user])

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
      {isLoading
        ? <ActivityIndicator size='large' color='blue'/>
        : <UserPost props={{ post, photo, user, fetchMoreData, page, navigation, route, dataRefresh, isRefreshing }}/>
      }  
      </View>
  )
}

export default MainUser

const styles = StyleSheet.create({
  
})