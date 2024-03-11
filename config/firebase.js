import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "@firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
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

// This solution gives an error - https://github.com/firebase/firebase-js-sdk/issues/7584
// export const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const activitiesRef = collection(db, "activities");
