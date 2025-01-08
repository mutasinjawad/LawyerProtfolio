import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCqQ6S3saOooWCUTEeL1CJ1fN78wqfPYA8",
    authDomain: "lawyerprotfolio.firebaseapp.com",
    projectId: "lawyerprotfolio",
    storageBucket: "lawyerprotfolio.firebasestorage.app",
    messagingSenderId: "378796111496",
    appId: "1:378796111496:web:cfc24d668748bc5e8b113d",
    measurementId: "G-QC8SEYXKMK"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);