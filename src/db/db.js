import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBj_ok4NeSIePJh4sEkmRk9p2rh-NZOK50",
  authDomain: "e-commerce-4b0f7.firebaseapp.com",
  projectId: "e-commerce-4b0f7",
  storageBucket: "e-commerce-4b0f7.appspot.com",
  messagingSenderId: "485295838276",
  appId: "1:485295838276:web:eaa9acb87e1b0441f81811"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db 