import { View, TextInput } from 'react-native'
import React from 'react'

export default function AddUserQuote(props) {
  return (
    <View>
      <TextInput 
        placeholder='enter a Quote'
        multiline
        // numberOfLines={4}
        
         />
      <TextInput placeholder='enter an author name' />
    </View>
  )
}