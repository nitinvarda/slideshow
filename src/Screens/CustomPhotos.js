import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function CustomPhotos(props) {
  const openPhotos = async()=>{

// You can also use as a promise without 'callback':
  const result = await launchImageLibrary({includeBase64:true});
  console.log(result);
  }
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={openPhotos}><Text>Tap to add photos</Text></TouchableOpacity>
    </View>
  )
}