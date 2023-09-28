// import { initializeApp  } from "firebase/app";
// import firebase from 'firebase/compat/app'
// import firebase from "firebase";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJJcCuzAjA6YU4Y6jHngRcTPOltBIVoJQ",
  authDomain: "disney-plus-clone-eadec.firebaseapp.com",
  projectId: "disney-plus-clone-eadec",
  storageBucket: "disney-plus-clone-eadec.appspot.com",
  messagingSenderId: "600799445456",
  appId: "1:600799445456:web:cfd4ebce0f0e42e86239d5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// export const auth = getAuth();
// export const db = getFirestore();
