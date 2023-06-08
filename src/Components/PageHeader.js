import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../Constansts/ColorPalette';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PageHeader(props) {
  return (
    <SafeAreaView style={{flexDirection:'row',padding:10,alignItems:'center',borderBottomWidth:1,borderBottomColor:Colors.gray}}>
       <TouchableOpacity onPress={()=>props.onIconPress()} style={{padding:2}}>

            <Ionicon name='arrow-back' size={30} color={Colors.lightGray}  /> 
       </TouchableOpacity>
       <View style={{flex:1,marginLeft:20}}>

        <Text style={{fontSize:24,fontWeight:'bold',color:Colors.gray}}>{props.pageName}</Text>
       </View>
    </SafeAreaView>
  )
}