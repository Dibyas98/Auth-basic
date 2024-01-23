// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF8rY_cowRDEYt25CzFVVEFgolNWs3Heo",
  authDomain: "fs-12-b67af.firebaseapp.com",
  projectId: "fs-12-b67af",
  storageBucket: "fs-12-b67af.appspot.com",
  messagingSenderId: "393550536793",
  appId: "1:393550536793:web:72f555fa4a7064471a5148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




