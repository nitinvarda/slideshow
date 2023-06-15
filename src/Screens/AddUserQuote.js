import { View, TextInput,Button } from 'react-native'
import React, { useContext, useState } from 'react'
import Firestore from '../Controllers/FirestoreController';
import AppContext from '../Context/AppContext';
import Colors from '../Constansts/ColorPalette';

export default function AddUserQuote(props) {
  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');
  const {user} = useContext(AppContext);


  const addQuote = () =>{
    Firestore.AddQuote({
      quote,
      author,
      userId:user.uid
    }).then(result=>console.log(result))
    .catch(error=>console.log(error));
  }
  return (
    <View style={{flex:0.5,margin:10,flexDirection:'column',justifyContent:'space-around',backgroundColor:Colors.backgroundColor}}>
      <TextInput 
        placeholder='enter a Quote'
        multiline
        style={{borderWidth:1,borderRadius:5}}
        numberOfLines={6}
        onChangeText={(text)=>setQuote(text)}
        
         />
      <TextInput  placeholder='enter an author name' onChangeText={(text)=>setAuthor(text)} style={{paddingLeft:5 ,borderWidth:1,borderRadius:5}} />
      <Button title='Add Quote' onPress={addQuote} style={{borderRadius:10}} />
    </View>
  )
}