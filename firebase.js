
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDb0fdGf8NkOIcX1Uun1Jmm5qwDJB5wBs8",
  authDomain: "notes-app-609b2.firebaseapp.com",
  projectId: "notes-app-609b2",
  storageBucket: "notes-app-609b2.appspot.com",
  messagingSenderId: "187324989125",
  appId: "1:187324989125:web:e669717da8e7a629ff3aac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
