import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmy2UUutuJu-REv6JXW-ucCoFHdXIKp-c",
  authDomain: "site1-fe4fd.firebaseapp.com",
  projectId: "site1-fe4fd",
  storageBucket: "site1-fe4fd.appspot.com",
  messagingSenderId: "903101466751",
  appId: "1:903101466751:web:4b00ac7763c8eee435574a",
  measurementId: "G-7BZ3EQTJTN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };

export default firebase;
