import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAD6u7iCCD89yes8Fyt2Crid00Rw4f3GA8",
  authDomain: "qwettus.firebaseapp.com",
  projectId: "qwettus",
  storageBucket: "qwettus.appspot.com",
  messagingSenderId: "267500450961",
  appId: "1:267500450961:web:82bdda63e357fbf28fbb30"
}

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

export default db
