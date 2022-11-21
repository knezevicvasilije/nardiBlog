import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBpuFZhwPUDrWyhr-jwd4sVic7ROc8EsWg",
  authDomain: "nardi-blog.firebaseapp.com",
  projectId: "nardi-blog",
  storageBucket: "nardi-blog.appspot.com",
  messagingSenderId: "133927038948",
  appId: "1:133927038948:web:47ebb39074332ccb40e1f1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
