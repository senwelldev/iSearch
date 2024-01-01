import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrcJpMcrlezvjZTLLRhNl6QBZUq1hWUa4",
  authDomain: "senwell-b8e50.firebaseapp.com",
  projectId: "senwell-b8e50",
  storageBucket: "senwell-b8e50.appspot.com",
  messagingSenderId: "258474911155",
  appId: "1:258474911155:web:357cb8aa10fc1714cd17c6",
  measurementId: "G-VDWGS48E28",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
