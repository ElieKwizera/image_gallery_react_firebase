import {useEffect,useState }from 'react';
import {myFirestore} from '../firebase/config'

const useStore = (collection) => {
    const [images,setImages] = useState([]);
    useEffect(()=>
    {
       const unsub = myFirestore.collection(collection)
        .orderBy('created_at','desc')
        .onSnapshot((snap)=>
        {
            let documents = [];
            snap.forEach(doc=>
                {
                    documents.push({ ...doc.data() ,id:doc.id });
                });
            setImages(documents);
        });
        return ()=> unsub(); 
    },[collection]);

    return { images };
};

export default useStore;
