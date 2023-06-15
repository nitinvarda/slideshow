import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SlideShow from '../Screens/SlideShow';
import CustomPhotos from '../Screens/CustomPhotos';
import { useEffect, useState } from 'react';
import LoginScreen from '../Screens/LoginScreen';
import AppContext from '../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from '../Screens/ProfileScreen';
import UserPhotosList from '../Screens/UserPhotosList';
import UserQuotesList from '../Screens/UserQuotesList';
import AddUserPhotos from '../Screens/AddUserPhotos';
import AddUserQuote from '../Screens/AddUserQuote';
import CustomSlideShow from '../Screens/CustomSlideShow';

const Stack = createStackNavigator();

export default function MyStack(props) {
  const [loggedIn,setLoggedIn] = useState(true)
  const [user,setUser] = useState({
    uid:'DDyCMjt8QxMIh0mAZ85gIZpikhR2',
    email:'nvarda@gmail.com'
  });

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
            <>
                <Stack.Screen name="AddUserQuote" component={AddUserQuote} />
                <Stack.Screen name="AddUserPhotos" component={AddUserPhotos} />
                <Stack.Screen name="UserQuotesList" component={UserQuotesList} />
                <Stack.Screen name="UserPhotosList" component={UserPhotosList} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="CustomPhotos" component={CustomPhotos} />
                <Stack.Screen name="CustomSlideShow" component={CustomSlideShow} />
            </>
          :
            <Stack.Screen name="loginScreen" component={LoginScreen} />
        }
      </Stack.Navigator>
    </AppContext.Provider>
  );
}