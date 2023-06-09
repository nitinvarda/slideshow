import { View, Text,ActivityIndicator,TouchableOpacity,Button } from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import FloatingButton from '../Components/FloatingButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import Firestore from '../Controllers/FirestoreController';
import AppContext from '../Context/AppContext';
import PageHeader from '../Components/PageHeader';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../Constansts/ColorPalette';
import {windowHeight,windowWidth} from '../Constansts/DeviceDimensions'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function UserQuotesList(props) {
    const navigation = useNavigation();
    const {user} = useContext(AppContext);
    const [quotes,setQuotes] = useState([])
    const [loading,setLoading] = useState(false)
    const [openModal,setOpenModal] = useState(false)

    useEffect(()=>{
      getQuotes();
    },[])


    const getQuotes = ()=>{
      setLoading(true)
      Firestore.getQuotes(user.uid).then(result=>{
        setQuotes(result);
        setLoading(false)
      }).catch(err=>console.log(err));
    }

    
  return (
    <>
     <PageHeader pageName="Quotes" onIconPress={()=>navigation.goBack()} />
     {loading ? 
     <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size={'large'} color={Colors.gray} /> 
      </View> :
      <FlatList
      data={quotes}
      keyExtractor={(item,index)=>index}
      renderItem={({item})=>{
        return(
          <TouchableOpacity onPress={()=>setOpenModal(true)} activeOpacity={0.2} style={{padding:15,borderBottomWidth:1}}>
            <Text style={{fontWeight:600}}>{item.quote}</Text>
      

            <Text style={{textAlign:'right',padding:5,fontWeight:'bold'}}>--{item.author}</Text>
           
          </TouchableOpacity>
        )
      }}
       />
      }
      <FloatingButton text="Add a new Quote" onPress={()=>navigation.navigate('AddUserQuote')} />
      
      
      {openModal && 
      
      <View style={{position:'absolute',top:0,left:0,right:0,bottom:0,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)',zIndex:3,}}>
          <View style={{
            width:windowWidth * 0.8 ,
            height:windowHeight * 0.2,
            backgroundColor:'white',
            borderRadius:10,
            flexDirection:'column',
            padding:10

            }}> 
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
              <AntDesign onPress={()=>setOpenModal(false)} name='close'  size={28}  />
            </View>
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center'
            }}
            >
            {/* <Button title='Edit' /> */}
            
            <TouchableOpacity>

            <AntDesign name='edit' size={28} color={'blue'} />
            </TouchableOpacity>
            <TouchableOpacity>

            <AntDesign name='delete' size={28} color={'red'} />
            </TouchableOpacity>
            </View>
          </View>
      </View>

          }
    </>
  )
}