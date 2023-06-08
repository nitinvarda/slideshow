import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function FloatingButton(props) {
  return (
    <TouchableOpacity onPress={()=>props.onPress()} activeOpacity={0.5} style={{position:'absolute',bottom:10,right:10,left:10,zIndex:2,backgroundColor:'red',padding:10,borderRadius:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                
                <Text style={{fontSize:18,color:'white'}}>{props.text}</Text>
        
    </TouchableOpacity>
  )
}