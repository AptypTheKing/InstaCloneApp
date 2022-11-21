import React from 'react'
import { StyleSheet, View } from 'react-native'
import UserPost from './UserPost'


const UserInfo = ({props}) => {
  return (
    <View >
      <UserPost
        photo={props.photo}
        post={props.post}
        user={props.user} 
        func={props.fetchMoreData}
        page={props.page}
        route={props.route}
        navigation={props.navigation}
        />
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
})