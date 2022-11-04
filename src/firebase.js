import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import dotenv from "dotenv";

console.log(process.env.NODE_ENV);

const app = initializeApp({
  apiKey: "AIzaSyBg71eYgZaSXQVfLee0YkqFc11fjJDa8gI",
  authDomain: "greenflix-auth.firebaseapp.com",
  projectId: "greenflix-auth",
  storageBucket: "greenflix-auth.appspot.com",
  messagingSenderId: "617206324865",
  appId: "1:617206325865:web:131414efbfd71ce2b7b780"
});


export const auth = getAuth(app);