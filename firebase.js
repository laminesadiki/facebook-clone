import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAgphSfeDiq6HHrMS2lMWTKc0eirhTb8Hw",
    authDomain: "ayoub-facebook-clone.firebaseapp.com",
    projectId: "ayoub-facebook-clone",
    storageBucket: "ayoub-facebook-clone.appspot.com",
    messagingSenderId: "581976500306",
    appId: "1:581976500306:web:327bf7b69b81ce09fa978b"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage }

