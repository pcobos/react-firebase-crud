import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBTWXv29TbNdtrLXbmo3yaS8g4a7wMG0dc",
  authDomain: "react-firebase-crud-2ffd2.firebaseapp.com",
  projectId: "react-firebase-crud-2ffd2",
  storageBucket: "react-firebase-crud-2ffd2.appspot.com",
  messagingSenderId: "530917747185",
  appId: "1:530917747185:web:37bc3c2ba2490ed8473c50"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();