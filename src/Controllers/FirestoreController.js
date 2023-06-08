import firestore from '@react-native-firebase/firestore';


const Firestore = {
    'AddQuote':async(data)=>{
        try {
            const result = await firestore().collection('quotes').add(data);
            return result;
            
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Firestore