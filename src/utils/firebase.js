import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBNyyOG50lN3V80hFKAKAtkDcdvzDEI0AA",
    authDomain: "dualkey-ecommerce.firebaseapp.com",
    projectId: "dualkey-ecommerce",
    storageBucket: "dualkey-ecommerce.appspot.com",
    messagingSenderId: "866296560620",
    appId: "1:866296560620:web:bf8d8863bb0ba9a75b5ec9",
    measurementId: "G-TR42L9L7N5"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)