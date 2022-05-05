import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDhxVfEP8XmGCoCkPKsUZ8sDlD_2_Q_U_0",

  authDomain: "als-website-1d36f.firebaseapp.com",

  projectId: "als-website-1d36f",

  storageBucket: "als-website-1d36f.appspot.com",

  messagingSenderId: "546900619698",

  appId: "1:546900619698:web:bb9939e0d2060eb496b4ab",

  measurementId: "G-Y93G4Y751L",
});

export const db = getFirestore(firebaseApp);
