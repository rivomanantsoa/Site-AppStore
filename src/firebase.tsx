// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV8ApBMr3BYzj03eT4wkD-I3Y7oTcHgqE",
  authDomain: "appstore-864f7.firebaseapp.com",
  projectId: "appstore-864f7",
  storageBucket: "appstore-864f7.appspot.com",
  messagingSenderId: "1047627639589",
  appId: "1:1047627639589:web:42f9a1739ad1babadc08cc"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
