import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'

export default function HomeScreen(props) {
    const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button onPress={()=>navigation.navigate('SlideShow')} title='Start slide show' />
      <Button onPress={()=>navigation.navigate('CustomPhotos')} title='Add Custom photos' />
    </View>
  )
}