import { View, Text, Button,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import Colors from '../Constansts/ColorPalette';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function HomeScreen(props) {
  const {loggedIn,logout} = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      {loggedIn  && 
      <TouchableOpacity disabled={!loggedIn} onPress={()=>navigation.navigate('ProfileScreen')} style={{position:'absolute',right:10,top:10,width:40,height:40,zIndex:1}}>
        <FontAwesome5 name='user-circle' size={40} color={Colors.gray} />
      </TouchableOpacity>
      }
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:Colors.gray,fontSize:50,borderBottomWidth:1,borderBottomColor:Colors.primary,borderBottomWidth:3,fontWeight:'bold'}}>SLIDE</Text>
      </View>
      
    <View style={{flex:1,flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <Button onPress={()=>navigation.navigate('SlideShow')} title='Start slide show' />
      {loggedIn ? 
      <Button onPress={()=>navigation.navigate('CustomPhotos')} title='Add Custom photos' />
      :
      <Button onPress={()=>navigation.navigate('loginScreen')} title='login' />
    }
    </View>
    </View>
  )
}