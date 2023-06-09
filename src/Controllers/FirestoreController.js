import firestore from '@react-native-firebase/firestore';


const Firestore = {
    'AddQuote':async(data)=>{
        try {
            const result = await firestore().collection('quotes').add(data);
            return result;
            
        } catch (error) {
            throw new Error(error);
        }
    },
    'getQuotes':async (uid)=>{
        try {
            const result = await firestore().collection('quotes').where('userId','==',uid).get();
            return result.docs.map(quote => ({ ...quote.data(), id: quote.id }));
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default Firestore