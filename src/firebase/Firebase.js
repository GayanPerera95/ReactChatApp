import firebase from 'firebase/app';
import  'firebase/firebase-storage';
import 'firebase/firestore';
require('firebase/auth')

    var firebaseConfig = {
    apiKey: "AIzaSyCGhGgvvz2NMioIJoz8knjIGNNw2KoSBig",
    authDomain: "react-e8523.firebaseapp.com",
    databaseURL: "https://react-e8523.firebaseio.com",
    projectId: "react-e8523",
    storageBucket: "react-e8523.appspot.com",
    messagingSenderId: "523533879815",
    appId: "1:523533879815:web:8f1496ef281684f611f8a2",
    measurementId: "G-1SKCPGLXY0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 

 //export const firestore =firebase.firestore()
 //export const auth = firebaseApp.auth()
  
  export default firebase