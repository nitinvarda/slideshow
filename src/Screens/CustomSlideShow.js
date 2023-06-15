import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Components/Carousel'
import Colors from '../Constansts/ColorPalette';
import { useNavigation, useRoute } from '@react-navigation/native';
import Firestore from '../Controllers/FirestoreController';
import AppContext from '../Context/AppContext';
import File from '../Controllers/FileController';

export default function CustomSlideShow(props) {
    const [images,setImages] = useState([]);
    const [quotes,setQuotes] = useState([]);
    const {params} = useRoute();
    const {user} = useContext(AppContext)


    useEffect(()=>{
     
        if(params.photos){
            setImages(params.photos)
            getQuotes();
        }
        
        // if(params.quotes){
        //     setQuotes(params.quotes);
        //     getPhotoList();
        // }
        
    },[])

    const getPhotoList = () =>{
        File.listFiles(user.id).then((result) => {
        
          setImages(result)
        }).catch(err=>console.log(err))
      }


    const getQuotes = ()=>{
        // setLoading(true)
        Firestore.getQuotes(user.uid).then(result=>{
          setQuotes(result);
          const quotesLength = result.length;
          // console.log({quotesLength})
          // console.log({newImages:params.photos?.slice(0,quotesLength)});
          setImages(params.photos?.slice(0,quotesLength))
        //   setLoading(false)
        }).catch(err=>console.log(err));
      }
      // console.log({images,quotes})
  return (
    <View style={{flex:1,backgroundColor:Colors.backgroundColor}}>
        {/* <Text style={{color:Colors.gray}}>CustomSlideShow</Text> */}
        {(images.length > 0 && quotes.length > 0) && 
      <Carousel images={images} quotes={quotes} custom />
        }
    </View>
  )
}