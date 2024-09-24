// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxN-BpcGNuI3eSI-h6fHTQR4t4-C-0G6Q",
  authDomain: "expander-baeae.firebaseapp.com",
  projectId: "expander-baeae",
  storageBucket: "expander-baeae.appspot.com",
  messagingSenderId: "977736139257",
  appId: "1:977736139257:web:8793af473a858275057d28",
  measurementId: "G-QM8MKV09M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
