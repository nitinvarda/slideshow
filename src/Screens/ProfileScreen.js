import { View, Text,Button } from 'react-native'
import React, { useContext } from 'react'
import PageHeader from '../Components/PageHeader'
import {useNavigation} from '@react-navigation/native'
import AppContext from '../Context/AppContext'
import Colors from '../Constansts/ColorPalette'

export default function ProfileScreen(props) {
    const navigation = useNavigation()
    const {user,logout} = useContext(AppContext);
    
  return (
    <View style={{flex:1,backgroundColor:Colors.backgroundColor}}>
      <PageHeader pageName="Profile" onIconPress={()=>navigation.goBack()} />
      <View style={{flex:1,marginHorizontal:10}}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

        <Text style={{fontSize:20,color:Colors.gray}}>email:</Text>
        <Text style={{paddingLeft:10,fontSize:20,color:Colors.gray}}>{user.email}</Text>
        </View>
        <View style={{flex:2,flexDirection:'column',justifyContent:'center'}}>
            <Button onPress={()=>logout()} title='Logout' />
        </View>
      </View>
    </View>
  )
}