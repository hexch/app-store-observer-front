import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import firebase from "firebase/app"
import "firebase/firestore"
import serviceAccount from "../firebase-admin.json"
import { firestore } from 'firebase-admin';

const firebaseConfig = {
      apiKey: "AIzaSyCXwD0RH4abz9ejg0ZPn7ZAx9WZ3NWRenY",
      authDomain: "project-observer-f92fe.firebaseapp.com",
      databaseURL: "https://project-observer-f92fe-default-rtdb.firebaseio.com",
      projectId: "project-observer-f92fe",
      storageBucket: "project-observer-f92fe.appspot.com",
      messagingSenderId: "577033897225",
      appId: "1:577033897225:web:da211ea3be3a1da1783fd8",
      measurementId: "G-WR4634EX98"
    };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const snapshot = await db.collection('1557459212').doc("JP").collection("20210525").get()
console.log(snapshot)
if (snapshot.empty) {
    console.log('No matching documents.');
  }else{
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
  }
  
// const a = await fetch("1557459212")
// console.log(a)

const app = createApp(App);
app.use(Antd)
app.mount("#app")