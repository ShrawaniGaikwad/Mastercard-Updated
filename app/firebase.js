import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbWSfEv-BW-havt4y5zVbVQw_8S8ONEbw",
  authDomain: "mastercard-frontend-19f94.firebaseapp.com",
  projectId: "mastercard-frontend-19f94",
  storageBucket: "mastercard-frontend-19f94.appspot.com",
  messagingSenderId: "719714573408",
  appId: "1:719714573408:web:8ad5c327345d5b94d93705",
  measurementId: "G-4WNLJ3D17C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth };
