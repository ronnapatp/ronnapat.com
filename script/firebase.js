import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBAESE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBAESE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBAESE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBAESE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBAESE_MEASUREMENT_ID
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);