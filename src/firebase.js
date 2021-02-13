// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  import firebase from "firebase";
  import 'firebase/firestore';
  

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtplBZMl3Yq8Z-2iKRTJOJ9AYbabsWC3Q",
    authDomain: "instagram-clone-6f2f0.firebaseapp.com",
    projectId: "instagram-clone-6f2f0",
    storageBucket: "instagram-clone-6f2f0.appspot.com",
    messagingSenderId: "793391159520",
    appId: "1:793391159520:web:22ec13bcb16a486d2ad885",
    measurementId: "G-2X31W4MGFK"
  })

  const db = firebase.firestore();; 
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};