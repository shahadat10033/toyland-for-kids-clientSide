import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-QKnaeDmMCzLHFzoBCTNed2F4uEDwnNM",
  authDomain: "toyland-for-kids.firebaseapp.com",
  projectId: "toyland-for-kids",
  storageBucket: "toyland-for-kids.appspot.com",
  messagingSenderId: "717945116498",
  appId: "1:717945116498:web:206a4e9ccfe4f407234c8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
