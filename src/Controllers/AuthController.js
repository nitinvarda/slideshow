import auth from '@react-native-firebase/auth';


const FireAuth  = {
    'create':async ({email,password})=>{
        try {
            const result = await auth().createUserWithEmailAndPassword(email,password);
            console.log(result);
            return 'success'
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                throw new Error('That email address is already in use!')
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                throw new Error('That email address is invalid!')
              }
          
              
        }
        

    },
    'login' :async({email,password})=>{
        try {
           const result =  await    auth().signInWithEmailAndPassword(email,password);
            const user = result.user?._user;
        //   console.log(result,result.user,result.user?._user)
           return ({
            email:user?.email,
            emailVerified:user?.emailVerified,
            displayName:user?.displayName,
            providerId:user?.providerId,
            uid:user?.uid
           });
            
        } catch (error) {
            throw new Error(error)
        }
        
    }
}


export default FireAuth;