import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoeAxQ2QCOJx1_WS8Pt1FdrHxEEgpP86g",
  authDomain: "farmer-aid-scheme.firebaseapp.com",
  projectId: "farmer-aid-scheme",
  storageBucket: "farmer-aid-scheme.appspot.com",
  messagingSenderId: "137270676424",
  appId: "1:137270676424:web:1ea3c446cf6964eca2cefd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
