// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//^ Note, firebase API key is OK to share, its used only to recognize your app
const firebaseConfig = {
  apiKey: "AIzaSyB1NmYu8Ilx-vFiaWmk9Oj9oSaiVebJH38",
  authDomain: "syne-cr8t.firebaseapp.com",
  projectId: "syne-cr8t",
  storageBucket: "syne-cr8t.appspot.com",
  messagingSenderId: "999386305633",
  appId: "1:999386305633:web:ad1f2f7338cced57d10620",
  measurementId: "G-01Z830B3NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

//^ Emulator runs on port 9099
//^ Hosting  runs on port 5000
//^ to start emulation uncomment the below line then run: firebase emulators:start --only auth

// connectAuthEmulator(auth, "http://localhost:9099/");
