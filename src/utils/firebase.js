import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "next-blogs-app",
  storageBucket: "next-blogs-app.appspot.com",
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

export const app = initializeApp(firebaseConfig);