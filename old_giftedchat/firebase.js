import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFjKvyFa1GwqT2pj5H1az8uBwlERzoN-E",
  authDomain: "family-chat-app-48.firebaseapp.com",
  projectId: "family-chat-app-48",
  storageBucket: "family-chat-app-48.appspot.com",
  messagingSenderId: "405199979051",
  appId: "1:405199979051:web:3f06b6f860af5b6da0a06e",
  measurementId: "G-TXHQ6FG91L"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };