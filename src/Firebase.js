import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArGeGwmR6m0ZI3PyTH98G-6ZVN5vJ7sl8",
  authDomain: "projetoead-c35a8.firebaseapp.com",
  projectId: "projetoead-c35a8",
  storageBucket: "projetoead-c35a8.appspot.com",
  messagingSenderId: "119274305426",
  appId: "1:119274305426:web:405d5afb57465a2d47334b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
