// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDoR3Xz0b4fpBn5a1Ag-oQpnD8asAfXN9s",
  authDomain: "clone-99af9.firebaseapp.com",
  databaseURL: "https://clone-99af9.firebaseio.com",
  projectId: "clone-99af9",
  storageBucket: "clone-99af9.appspot.com",
  messagingSenderId: "1045363891551",
  appId: "1:1045363891551:web:0952d5b3baa304011c6aea",
  measurementId: "G-YJH552Y4GN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
