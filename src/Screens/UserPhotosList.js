import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import File from '../Controllers/FileController'
import { useNavigation, useRoute } from '@react-navigation/native';
import PageHeader from '../Components/PageHeader';
import FloatingButton from '../Components/FloatingButton';

export default function UserPhotosList(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const [photos,setPhotos] = useState([
        'https://firebasestorage.googleapis.com/v0/b/slider-3a299.appspot.com/o/DDyCMjt8QxMIh0mAZ85gIZpikhR2%2Frn_image_picker_lib_temp_bb8a2fbf-a8fa-4356-a4a8-834e1b1f6e11.jpg?alt=media&token=4c141a49-b583-4a13-9bf0-f01a095c2a5e',
        'https://firebasestorage.googleapis.com/v0/b/slider-3a299.appspot.com/o/DDyCMjt8QxMIh0mAZ85gIZpikhR2%2Frn_image_picker_lib_temp_bb8a2fbf-a8fa-4356-a4a8-834e1b1f6e11.jpg?alt=media&token=4c141a49-b583-4a13-9bf0-f01a095c2a5e',
        'https://firebasestorage.googleapis.com/v0/b/slider-3a299.appspot.com/o/DDyCMjt8QxMIh0mAZ85gIZpikhR2%2Frn_image_picker_lib_temp_bb8a2fbf-a8fa-4356-a4a8-834e1b1f6e11.jpg?alt=media&token=4c141a49-b583-4a13-9bf0-f01a095c2a5e',
        'https://firebasestorage.googleapis.com/v0/b/slider-3a299.appspot.com/o/DDyCMjt8QxMIh0mAZ85gIZpikhR2%2Frn_image_picker_lib_temp_bb8a2fbf-a8fa-4356-a4a8-834e1b1f6e11.jpg?alt=media&token=4c141a49-b583-4a13-9bf0-f01a095c2a5e',
        'https://firebasestorage.googleapis.com/v0/b/slider-3a299.appspot.com/o/DDyCMjt8QxMIh0mAZ85gIZpikhR2%2Frn_image_picker_lib_temp_bb8a2fbf-a8fa-4356-a4a8-834e1b1f6e11.jpg?alt=media&token=4c141a49-b583-4a13-9bf0-f01a095c2a5e',
        'https://firebasestorage.googleapis.com/v0/b/slider-3a299.appspot.com/o/DDyCMjt8QxMIh0mAZ85gIZpikhR2%2Frn_image_picker_lib_temp_bb8a2fbf-a8fa-4356-a4a8-834e1b1f6e11.jpg?alt=media&token=4c141a49-b583-4a13-9bf0-f01a095c2a5e',
        
    ])
    useEffect(()=>{
        // getList(route.params?.id)
    },[])

    const getList = (id) =>{
        File.listFiles(id).then((result) => {
        
          setPhotos(result)
        }).catch(err=>console.log(err))
      }
    
  return (
   <>

        <PageHeader pageName="Photos" onIconPress={()=>navigation.goBack()} />
    
      <FlatList 
        data={photos} 
        numColumns={2}
       
        // ListFooterComponentStyle={{position:'absolute',bottom:10,right:10,left:10,zIndex:2,backgroundColor:'red'}}
        // ListFooterComponent={
        
        // }
        
        // style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}
        renderItem={({item})=>{
            
            return(
                <View style={{ flex: 1,margin:1  }}>
                <Image source={{uri:item}} style={{height:300,}} />
                </View>
            )
        }}
        />
        <FloatingButton text="Start Slide Show" onPress={()=>navigation.navigate('CustomSlideShow',{photos})} />
        
    </>
  )
}