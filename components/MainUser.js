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
    } catch (e) {
      alert(e)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchMoreData = async () => {
    const responseMoreData = await axios.get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
    setPhoto((list) => [...list, ...responseMoreData.data])
    console.log('fetching')
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
        setIsRefreshing(false)
      }
    } else {
      fetchMoreData()
    }
  }, [page, isRefreshing])

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
        : <UserPost props={{ post, photo, user, page, navigation, route, dataRefresh, isRefreshing, nextPage }}/>
      }  
      </View>
  )
}

export default MainUser

const styles = StyleSheet.create({
  
})