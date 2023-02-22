import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBybhTom6ZEzxkc-3lW3klSpJUjjWbL3NM",
    authDomain: "event-management-system-e404d.firebaseapp.com",
    projectId: "event-management-system-e404d",
    storageBucket: "event-management-system-e404d.appspot.com",
    messagingSenderId: "75906865584",
    appId: "1:75906865584:web:c25b908f342ade0ebe1e75",
    measurementId: "G-4DNZZ7VZ8Z"
};
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };