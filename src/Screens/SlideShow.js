import { View, Text,Image,Dimensions,ScrollView,FlatList,Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../Components/Carousel';
import {UNSPLASH_API_KEY} from 'dotenv'
import Colors from '../Constansts/ColorPalette';
import {useRoute} from '@react-navigation/native'


export default function SlideShow() {

  const [images,setImages] = useState([])
  const [quotes,setQuotes] = useState([])
  const {params} = useRoute()
  


 

    useEffect(()=>{
  
      fetch(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&page=1&query=${params?.topic ?? 'nature'}`)
        
        .then((response)=> response.json())
            .then((images)=>{
             
           
              setImages(images.results);
              
            }).catch(err=>console.log(err))

      fetch('https://api.quotable.io/quotes/random?limit=10').then((response)=> response.json())
      .then((result)=>{
        
      
        setQuotes(result);
        
      }).catch(err=>console.log(err))

            


    },[])

  return (
    <View style={{flex:1,backgroundColor:Colors.backgroundColor}}>
      { images.length > 0 && quotes.length > 0 ? 
     <Carousel images={images} quotes={quotes} /> : <Text>Loading..</Text>
    }
    </View>
  )
}