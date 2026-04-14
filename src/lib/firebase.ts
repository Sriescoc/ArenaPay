import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkxlKgSsaDkrRA5yx9XB2Q1OTbKNV1-k0",
  authDomain: "arenapay-7f1cf.firebaseapp.com",
  projectId: "arenapay-7f1cf",
  storageBucket: "arenapay-7f1cf.firebasestorage.app",
  messagingSenderId: "111937211400",
  appId: "1:111937211400:web:9f6667d95009ba9d0295bd"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
