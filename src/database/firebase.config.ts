import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const firebaseConfig = {
  apiKey: process.env.RIVERA_TIME_TRACK_API_KEY,
  authDomain: process.env.RIVERA_TIME_TRACK_AUTH_DOMAIN,
  projectId: process.env.RIVERA_TIME_TRACK_PROJECT_ID,
  storageBucket: process.env.RIVERA_TIME_TRACK_STORAGE_BUCKET,
  messagingSenderId: process.env.RIVERA_TIME_TRACK_MESSAGING_SENDER_ID,
  appId: process.env.RIVERA_TIME_TRACK_APP_ID,
  measurementId: process.env.RIVERA_TIME_TRACK_MEASUREMENT_ID,
};

const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebase_app);

console.log("Firebase app initialized 🚀");

export { db, auth }