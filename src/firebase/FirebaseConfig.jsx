// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHyeMv0ZEyYmvR9iBSKJmNnUyNR-0X86Y",
  authDomain: "shopx-1d206.firebaseapp.com",
  projectId: "shopx-1d206",
  storageBucket: "shopx-1d206.appspot.com",
  messagingSenderId: "978067214276",
  appId: "1:978067214276:web:5ead865c2d2b3b46879e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);
const auth=getAuth(app);

export {auth,fireDB}