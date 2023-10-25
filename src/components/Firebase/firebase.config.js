import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNIs869WOhwhjwz8OnCsLsk2zffsXMryA",
  authDomain: "coffee-shop-5f100.firebaseapp.com",
  projectId: "coffee-shop-5f100",
  storageBucket: "coffee-shop-5f100.appspot.com",
  messagingSenderId: "112333098977",
  appId: "1:112333098977:web:7c907bdd5d81fb3fddcca0"
};


const app = initializeApp(firebaseConfig);
export default app;