import { View, Text,TextInput,StyleSheet,Button,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../Context/AppContext';
// import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FireAuth from '../Controllers/AuthController';
import Colors from '../Constansts/ColorPalette';

export default function LoginScreen(props) {
    const navigation = useNavigation();
    const {changeAuthentication} = useContext(AppContext);
    const [login,setLogin] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('')


    const createAccount = () =>{
        if(email & password & confirmPassword){

            if(password===confirmPassword){
                FireAuth.create({email,password}).then(result=>console.log(result))
                
            }
            else{
                console.log("Passwords doesn't match")
                setError("Passwords doesn't match");
            }
        }
        else{
            setError('All fields required');
            setTimeout(()=>{
                setError('');
            },3000)
        }

    }

    const loginAccount = () =>{
      
        if(email && password){

            FireAuth.login({email,password}).then(result=>{
                changeAuthentication(result);
            }).catch(error=>{
                setError(error.message);
                setTimeout(()=>{
                    setError('');
                },3000)
            })
        }
        else{
            setError('All fields required');
            setTimeout(()=>{
                setError('');
            },3000)
        }
    }


    const renderType =()=>{
        return(
            <View style={[{flex:2},{flexDirection:'column',justifyContent:'space-evenly'}]}>
                <TextInput placeholder='email' placeholderTextColor={Colors.lightGray} value={email} onChangeText={(text)=>setEmail(text)} style={styles.textField} />
                <TextInput  placeholder='password' placeholderTextColor={Colors.lightGray} secureTextEntry value={password} onChangeText={(text)=>setPassword(text)} style={styles.textField} />
                {login ? (
                    <>
                    {/* {error && <Text>{error}</Text>} */}
                    {/* <View style={{flexDirection:'row',padding:0,margin:0}}>
                        <Text style={{padding:0,margin:0,color:Colors.textColor}}>forgot password ? </Text>
                        <TouchableOpacity onPress={()=>setLogin(true)}><Text style={{margin:0,padding:0,color:Colors.primary}}>reset here</Text></TouchableOpacity>
                    </View> */}
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:Colors.textColor}}>New here ? </Text>
                        <TouchableOpacity onPress={()=>setLogin(false)}><Text style={{color:Colors.primary}}>Create an account</Text></TouchableOpacity>
                    </View>
                    </>

                ) : (
                    <>


                    <TextInput placeholder='confirm password' placeholderTextColor={Colors.lightGray} value={confirmPassword} onChangeText={(text)=>setConfirmPassword(text)} style={styles.textField} />
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:Colors.textColor}}>Already a Member ? </Text>
                        <TouchableOpacity onPress={()=>setLogin(true)}><Text style={{color:Colors.primary}}>Login here</Text></TouchableOpacity>
                    </View>
                </>
                )}
                {error && <Text style={{color:'red'}}>{error}</Text>}
                <TouchableOpacity onPress={()=>login ? loginAccount() : createAccount()}  style={{borderRadius:8,padding:8,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:Colors.primary}}  >
                    <Text style={{flexDirection:'row',justifyContent:'center',alignItems:'center',color:'#ffebe6'}}>{login ? 'Sign in' : 'Sign up'}</Text></TouchableOpacity>
            </View>
                   
            
            )

        

    }
  return (
    <KeyboardAvoidingView style={{flex:1,margin:20,flexDirection:'column'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{position:'absolute',left:0,top:0,zIndex:1,height:37,width:37,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

            <AntDesign  name="arrowleft" size={30} color={'gray'} />
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
            

                <Text style={{fontWeight:'bold',fontSize:28,color:Colors.gray}}>Slide</Text>
            
        </View>
        {renderType()}
        <View style={[styles.flex,{flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}]} > 
                     
            {/* <Text style={{color:Colors.gray}}>Or login with</Text>
            <TouchableOpacity style={{borderWidth:1,padding:10,borderRadius:50,width:50,height:50,flexDirection:'row',justifyContent:'center',alignItems:'center',borderColor:Colors.gray}}>

            <FontAwesome name="google" size={30} color="blue" />
            </TouchableOpacity> */}
        </View>
        
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    textField:{
        borderWidth:1,
        borderRadius:8,
        padding:10,
        width:'100%',
        color:Colors.gray,
        borderColor:Colors.gray
    },
    flexRowCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center"
    },
    flex:{
        flex:1,
    }
})