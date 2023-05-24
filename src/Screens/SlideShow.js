import { View, Text,Image,Dimensions,ScrollView,FlatList,Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../Components/Carousel';
import {UNSPLASH_API_KEY} from 'dotenv'


export default function SlideShow() {

  const [images,setImages] = useState([])
  const [quotes,setQuotes] = useState([])


 

    useEffect(()=>{
  
      fetch(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&page=1&query=nature`)
        
        .then((response)=> response.json())
            .then((images)=>{
             
           
              setImages(images.results);
              
            }).catch(err=>console.log(err))

      fetch('https://api.quotable.io/quotes/random?limit=10').then((response)=> response.json())
      .then((result)=>{
        
      
        setQuotes(result);
        
      }).catch(err=>console.log(err))

            


    },[])

  console.log(images,quotes)
  return (
    <View style={{flex:1}}>
      { images.length > 0 && quotes.length > 0 ? 
     <Carousel images={images} quotes={quotes} /> : <Text>Loading..</Text>
    }
    </View>
  )
}