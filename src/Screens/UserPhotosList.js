import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import File from '../Controllers/FileController'
import { useNavigation, useRoute } from '@react-navigation/native';
import PageHeader from '../Components/PageHeader';
import FloatingButton from '../Components/FloatingButton';
import Testing from '../TestingData/Testing';

export default function UserPhotosList(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const [photos,setPhotos] = useState([])
    useEffect(()=>{
        getList(route.params?.id)
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