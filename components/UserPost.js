import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import PostPreview from './PostPreview'
import UserTopHeader from './UserTopHeader'



const UserPost = ({props}) => {

  const renderFlatList = (({item}) =>
  (<PostPreview photo={item} navigation={props.navigation} user={props.user} route={props.route} />
  ))

  const offset = useSharedValue(0)
  const headerHeight = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: interpolate(offset.value, [0, headerHeight.value], [0, -headerHeight.value], 'clamp')
      }]
    }
  })
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      offset.value = event.contentOffset.y 
    }
  })

  const stickyHead = () => {
    return (
      <Animated.View style={animatedStyle}  >
        <Animated.View onLayout={(event) => (headerHeight.value = event.nativeEvent.layout.height)} >
          <UserTopHeader photo={props.photo} post={props.post} user={props.user} loading={props.isLoading} route={props.route} />
        </Animated.View>
        <View style={styles.bottomBar}>
          <MaterialCommunityIcons name='grid' size={24}/>
          <Ionicons name='ios-play-outline' size={24}/>
          <Ionicons name='ios-person-outline' size={24}/>
        </View>
      </Animated.View>
    )
  }
  return (
    <Animated.FlatList
      stickyHeaderIndices={[0]}
      ListHeaderComponent={stickyHead}
      ListFooterComponent={() => 
          props.page == 4
          ? <></>
          : <ActivityIndicator size={24} color='blue' />
      }
      ListFooterComponentStyle={{margin: props.page == 4 ? 0 : 10}}
      onScroll={scrollHandler}
      numColumns={3}
      data={props.photo}
      renderItem={renderFlatList}
      keyExtractor={(item) => item.id}
      onEndReachedThreshold={0.1}
      onEndReached={props.fetchMoreData}
      /> 
    
)}
export default UserPost

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row', 
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabsContainer: {
    zIndex: 0,
    height: 252
  },
})