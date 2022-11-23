import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import UserPost from './UserPost'

const User = ({ navigation, route }) => {

  const [page, setPage] = useState(1)

  const[isRefreshing, setIsRefreshing] = useState(false)

  const fetchMoreData = async () => {
    if(page === 4) return 
    let responseMoreData = await axios.get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
    setPhoto((list) => [...list, ...responseMoreData.data])
    setPage(page + 1)
    console.log('fetching')
  }

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
    setPage(page + 1)
  } catch (e) {
    alert(e)
  } finally {
    setIsLoading(false)
  }
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
      {isLoading
        ? <ActivityIndicator size='large' color='blue'/>
        : <UserPost props={{ post, photo, user, fetchMoreData, page, route, navigation, dataRefresh, isRefreshing}} />
      }  
      </View>
  )
}

export default User

const styles = StyleSheet.create({
  
})