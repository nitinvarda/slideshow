import storage from '@react-native-firebase/storage';

const File = {
    'upload':async({file,name,userId})=>{
        try {
            // console.log({file,name,userId})
            const reference = storage().ref(`/${userId}/${name}`);
            await reference.putFile(file);
        } catch (error) {
            throw new Error(error);
        }

    },
    'listFiles' :async(userId,pageToken) =>{


        const imageRefs = await storage().ref().child(userId).listAll();
        const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
        console.log(urls)
        // return reference.list({ pageToken }).then(result => {
        //   // Loop over each item
        //   result.items.forEach(ref => {
        //     console.log(ref.fullPath);
        //   });
      
        //   if (result.nextPageToken) {
        //     return listFilesAndDirectories(reference, result.nextPageToken);
        //   }
      
        //   return Promise.resolve();
        // });
      }
}

export default File;