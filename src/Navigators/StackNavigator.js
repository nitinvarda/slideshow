import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SlideShow from '../Screens/SlideShow';
import CustomPhotos from '../Screens/CustomPhotos';
import { useEffect, useState } from 'react';
import LoginScreen from '../Screens/LoginScreen';
import AppContext from '../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function MyStack(props) {
  const [loggedIn,setLoggedIn] = useState(false)
  const [user,setUser] = useState({});

  const changeAuthentication = (data) =>{
    setLoggedIn(true)
    setUser(data)
    AsyncStorage.setItem('user',JSON.stringify(data)).then(result=>console.log(result)).catch(err=>console.log(err));
  }

  const logout = () =>{
    AsyncStorage.removeItem('user').then(()=>{
      setLoggedIn(false)
      setUser({})

    }).catch(err=>{
      console.log(err)
    })
  }

  const checkUser = async() =>{
    try {
      const user = await AsyncStorage.getItem('user');
    
      if(user){

        setUser(JSON.parse(user));
        setLoggedIn(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    checkUser();
  },[])
  return (
    <AppContext.Provider value={{loggedIn,changeAuthentication,user,logout}}>

   
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="SlideShow" component={SlideShow}  />
        {loggedIn ? 
        
            <Stack.Screen name="CustomPhotos" component={CustomPhotos} />
          :
            <Stack.Screen name="loginScreen" component={LoginScreen} />
        }
      </Stack.Navigator>
    </AppContext.Provider>
  );
}