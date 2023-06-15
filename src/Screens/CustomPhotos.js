import { View, Text,TouchableOpacity,Image, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import File from '../Controllers/FileController';
import AppContext from '../Context/AppContext';
import {useNavigation} from '@react-navigation/native'
import Colors from '../Constansts/ColorPalette';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CustomPhotos(props) {
  const [image,setImage] = useState(image);
  const {user} = useContext(AppContext)
  const navigation = useNavigation()

  const openPhotos = async()=>{
// You can also use as a promise without 'callback':
  const result = await launchImageLibrary({includeBase64:true});

  setImage(result.assets[0])
 
  }


  const savePhoto = ()=>{
    
    const data = {
      file:image.uri,
      name:image.fileName,
      userId:user.uid
    }
    // console.log(data)
    File.upload(data)
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  
 
  return (
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',backgroundColor:Colors.backgroundColor}}>
      <TouchableOpacity onPress={openPhotos} style={{margin:10,flex:2,borderWidth:2,borderColor:Colors.gray,borderRadius:5,borderStyle:'dashed',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <MaterialIcons name='add-a-photo' size={30} color={Colors.gray} />
        <Text style={{color:Colors.gray}}>Tap to add photos</Text>
      </TouchableOpacity>
      {image && <View>
        <Image source={{uri:`data:image/png;base64,${image.base64}`}} style={{width:300,height:300}} />
      </View>}
      <View style={{flex:1}}>
        <Button title='submit' onPress={savePhoto} />
        
      </View>
      <View style={{flex:1}}>
        <Button title='get List' onPress={()=>navigation.navigate('UserPhotosList',{id:user.uid})} />

      </View>
      <View style={{flex:1}}>

        <Button title="get Quotes" onPress={()=>navigation.navigate("UserQuotesList")} />
      </View>
    </View>
  )
}