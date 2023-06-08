import { View, Text } from 'react-native'
import React from 'react'
import FloatingButton from '../Components/FloatingButton';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function UserQuotesList(props) {
    const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
      <Text>UserQuotesList</Text>
      <FloatingButton text="Add a new Quote" onPress={()=>navigation.navigate('AddUserQuote')} />
    </View>
  )
}