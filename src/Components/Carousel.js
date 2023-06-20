import { View, Text,FlatList,Image,Dimensions, Animated } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Carousel({images,quotes,custom}) {
    const flatListRef = useRef();

    const slide0Animation1 = useRef(new Animated.Value(-400)).current
    const slide0Animation2 = useRef(new Animated.Value(400)).current


    // first slide animations
    const slide1Animation1 = useRef(new Animated.Value(-400)).current
    const slide1Animation2 = useRef(new Animated.Value(400)).current

    // second slide animations
    const slide2Animation1 = useRef(new Animated.Value(-400)).current
    const slide2Animation2 = useRef(new Animated.Value(400)).current

    // third slide animations
    const slide3Animation1 = useRef(new Animated.Value(-400)).current
    const slide3Animation2 = useRef(new Animated.Value(400)).current

    // fourth slide animations
    const slide4Animation1 = useRef(new Animated.Value(-400)).current
    const slide4Animation2 = useRef(new Animated.Value(400)).current

    // fifth slide animations
    const slide5Animation1 = useRef(new Animated.Value(-400)).current
    const slide5Animation2 = useRef(new Animated.Value(400)).current

    // six slide animations
    const slide6Animation1 = useRef(new Animated.Value(-400)).current
    const slide6Animation2 = useRef(new Animated.Value(400)).current

    // seventh slide animations
    const slide7Animation1 = useRef(new Animated.Value(-400)).current
    const slide7Animation2 = useRef(new Animated.Value(400)).current

    // eigth slide animations
    const slide8Animation1 = useRef(new Animated.Value(-400)).current
    const slide8Animation2 = useRef(new Animated.Value(400)).current

    // nine slide animations
    const slide9Animation1 = useRef(new Animated.Value(-400)).current
    const slide9Animation2 = useRef(new Animated.Value(400)).current



    
  const [selectedIndex,setSelectedIndex] = useState(0)

    useEffect(()=>{
       
      const interval =  setInterval(()=>{
  
          setSelectedIndex((previousIndex)=>{
              
            const nextIndex = previousIndex === images.length - 1 ? 0 : previousIndex+1;
          console.log({length:images.length,nextIndex})
            flatListRef?.current?.scrollToIndex({
            index:nextIndex,
            animated:true
          })
            return nextIndex
          })
          

        },4000)

        return () => clearInterval(interval)

    },[])

    const showQuotation = (index) =>{
      // if(index==0){
       
      //   return (
      //     <View style={{position:'absolute',left:0,right:0,bottom:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)'}}>
      //       <Animated.View style={{marginBottom:15,transform:[{translateX:slide1Animation1}]}}>
      //         <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
      //       </Animated.View>
      //       <Animated.View style={{transform:[{translateX:slide1Animation2}]}}>

      //       <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
      //     </Animated.View>
      //   </View>
      //   )

      // }
      // else {
      
      //   return (
      //     <View style={{position:'absolute',left:0,right:0,top:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)'}}>
      //       <Animated.View style={{marginBottom:15,transform:[{translateX:slide2Animation1}]}}>
      //         <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
      //       </Animated.View>
      //       <Animated.View style={{transform:[{translateX:slide2Animation2}]}}>

      //       <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
      //     </Animated.View>
      //   </View>
      //   )
      // }
      switch(index){
        case 0:
          return (
            <View style={{position:'absolute',left:5,right:5,bottom:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide0Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide0Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        case 3:
          return (
            <View style={{position:'absolute',left:5,right:5,bottom:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide3Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide3Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        case 6:
          return (
            <View style={{position:'absolute',left:5,right:5,bottom:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide6Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide6Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        case 9: 
          return (
            <View style={{position:'absolute',left:5,right:5,bottom:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide9Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide9Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        
        case 1:
          return (
            <View style={{position:'absolute',left:5,right:5,top:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide1Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide1Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        case 4:
          return (
            <View style={{position:'absolute',left:5,right:5,top:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide4Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide4Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        case 7:
          
          return (
            <View style={{position:'absolute',left:5,right:5,top:30,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)'}}>
              <Animated.View style={{marginBottom:15,transform:[{translateX:slide7Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide7Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
          </View>
          )
        case 2:
          return (
            <View style={{position:'absolute',left:5,right:5,flexDirection:'row',justifyContent:'center',alignItems:'center',height:windowHeight,}}>
             <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>

              <Animated.View style={{marginBottom:15,transform:[{translateX:slide2Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide2Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
             </View>
          </View>
          )
        case 5:
          return (
            <View style={{position:'absolute',left:5,right:5,flexDirection:'row',justifyContent:'center',alignItems:'center',height:windowHeight,}}>
             <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>

              <Animated.View style={{marginBottom:15,transform:[{translateX:slide5Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide5Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
             </View>
          </View>
          )
        case 8:
          return (
            <View style={{position:'absolute',left:5,right:5,flexDirection:'row',justifyContent:'center',alignItems:'center',height:windowHeight,}}>
             <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:10,padding:5}}>

              <Animated.View style={{marginBottom:15,transform:[{translateX:slide8Animation1}]}}>
                <Text style={{color:'white',fontSize:22,}}>{custom ? quotes[index]?.quote :  quotes[index]?.content}</Text>
              </Animated.View>
              <Animated.View style={{transform:[{translateX:slide8Animation2}]}}>

              <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>--{quotes[index]?.author}</Text>
            </Animated.View>
             </View>
          </View>
          )
        
       
        
       
      }
    }

    const viewableChanged = useCallback(({viewableItems,changed}) =>{
      console.log(viewableItems)
      switch(changed[0]?.index){
        case 0:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide0Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide0Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start()
          }
          return 0;
        case 1:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide1Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide1Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();
          }
          return 0;
        case 2:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide2Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide2Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 3:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide3Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide3Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 4:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide4Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide4Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 5:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide5Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide5Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 6:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide6Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide6Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 7:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide7Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide7Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 8:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide8Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide8Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
        case 9:
          if(changed[0]?.isViewable){
            Animated.parallel([Animated.timing(slide9Animation1,{
              toValue:0,
              duration:800,
              useNativeDriver:true
            }),
            Animated.timing(slide9Animation2,{
              toValue:0,
              useNativeDriver:true,
              duration:800
            })
          ]).start();

          }
          return 0;
      }
    },[])
    console.log({quotes})
  return (
    <FlatList 
      ref={flatListRef}
      data={images} 
      keyExtractor={(item)=>item.id} 
      horizontal 
      pagingEnabled
      getItemLayout={(data, index) => (
        {length: windowWidth, offset: windowWidth * index, index}
      )}
      // initialScrollIndex={2}
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={viewableChanged}
      viewabilityConfig={{
        minimumViewTime: 500,
        viewAreaCoveragePercentThreshold: 60,
    }}
      renderItem={({item,index})=>{
   
        return (
        <>
        <Image source={{uri: custom ? item : item?.urls?.full}} style={{width:windowWidth,height:windowHeight}} />
        {showQuotation(index)}
       
        </>
        )
      }}/>
  )
}