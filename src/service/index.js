import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA_u0K5C-WX6KvcWU9OwO3bqQ1bco1sqsE",
  authDomain: "tienda-55c75.firebaseapp.com",
  projectId: "tienda-55c75",
  storageBucket: "tienda-55c75.appspot.com",
  messagingSenderId: "989957210269",
  appId: "1:989957210269:web:b533233676ba78a4809474",
};
 const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
 export {db}