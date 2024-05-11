// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXlJQxiPUMK1D4AL9ObHOyWl7ElDXy2l4",
  authDomain: "food-client-site.firebaseapp.com",
  projectId: "food-client-site",
  storageBucket: "food-client-site.appspot.com",
  messagingSenderId: "324681169044",
  appId: "1:324681169044:web:008e8c4a732b496ea39c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;