import * as firebase from "firebase/app";
import "firebase/storage"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAYlT9MGmrsGDXWYLHu8fulMpiBrDhghw0",
    authDomain: "firegram-fbb0f.firebaseapp.com",
    databaseURL: "https://firegram-fbb0f.firebaseio.com",
    projectId: "firegram-fbb0f",
    storageBucket: "firegram-fbb0f.appspot.com",
    messagingSenderId: "141910478305",
    appId: "1:141910478305:web:928cd0196063ef593096a0",
    measurementId: "G-5E7X0SSTWB"
};

firebase.initializeApp(firebaseConfig);
const myStorage = firebase.storage();
const myFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { myFirestore, myStorage,timestamp};