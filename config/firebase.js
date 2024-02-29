import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAARcOHSfWOdPrQkkJPniY6fD3rkYGurV4",
  authDomain: "spontan-e2088.firebaseapp.com",
  projectId: "spontan-e2088",
  storageBucket: "spontan-e2088.appspot.com",
  messagingSenderId: "771829335180",
  appId: "1:771829335180:web:ee4cfe0a0d23fe76fa27a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
