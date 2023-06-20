import { View, Text, Button,TouchableOpacity,FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext';
import Colors from '../Constansts/ColorPalette';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { windowHeight, windowWidth } from '../Constansts/DeviceDimensions';
import {UNSPLASH_API_KEY} from 'dotenv';
import Testing from '../TestingData/Testing';

export default function HomeScreen(props) {
  const {loggedIn,logout} = useContext(AppContext);
  const [selectTopic,setSelectTopic] = useState(false)
  const navigation = useNavigation();
  const [topicList,setTopicList] = useState([]);
  const [loadingTopics,setLoadingTopics] = useState(false)

  // navigation.navigate('SlideShow')}
  

  const getTopics  = () =>{
    setLoadingTopics(true)
    // setSelectTopic(true)
    // setLoadingTopics(false)
    fetch(`https://api.unsplash.com/topics?page=1&order_by=featured&client_id=${UNSPLASH_API_KEY}`).then(result=>result.json()).then(data=>{
      console.log(data)
      setTopicList(data)
      setSelectTopic(true)
      setLoadingTopics(false)
      
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const startSlideShow = (topic) =>{
    navigation.navigate('SlideShow',{topic:topic.slug})
    setSelectTopic(false)

  }
  return (
    <View style={{flex:1,backgroundColor:Colors.backgroundColor}}>
      {loggedIn  && 
      <TouchableOpacity disabled={!loggedIn} onPress={()=>navigation.navigate('ProfileScreen')} style={{position:'absolute',right:10,top:10,width:40,height:40,zIndex:1}}>
        <FontAwesome5 name='user-circle' size={40} color={Colors.gray} />
      </TouchableOpacity>
      }
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:Colors.gray,fontSize:50,borderBottomWidth:1,borderBottomColor:Colors.primary,borderBottomWidth:3,fontWeight:'bold'}}>SLIDE</Text>
      </View>
      
    <View style={{flex:1,flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <Button onPress={()=> getTopics()} title='Start slide show' />
      {loggedIn ? 
      <Button onPress={()=>navigation.navigate('CustomPhotos')} title='Add Custom photos' />
      :
      <Button onPress={()=>navigation.navigate('loginScreen')} title='login' />
    }
    </View>
    {selectTopic && (
      <TouchableOpacity onPress={()=>setSelectTopic(false)} style={{position:'absolute',width:windowWidth,height:windowHeight,zIndex:2,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
        {/* <View style={{width:windowWidth - (windowWidth * 0.3),height:windowHeight/2,backgroundColor:'white'}}>
          
        </View> */}
        <FlatList 
        contentContainerStyle={{margin:20, marginHorizontal:40,borderRadius:5,backgroundColor:'white'}}
        data={topicList}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>startSlideShow(item)} style={{borderBottomWidth:1,padding:10}}>
              <Text style={{fontSize:18,color:Colors.gray}}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}

        />
      </TouchableOpacity>
    )}
    </View>
  )
}