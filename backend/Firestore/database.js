import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFjKvyFa1GwqT2pj5H1az8uBwlERzoN-E",
    authDomain: "family-chat-app-48.firebaseapp.com",
    projectId: "family-chat-app-48",
    storageBucket: "family-chat-app-48.appspot.com",
    messagingSenderId: "405199979051",
    appId: "1:405199979051:web:3f06b6f860af5b6da0a06e",
    measurementId: "G-TXHQ6FG91L"
};

class Fire {
    constructor(callback) {
        this.init(callback);
    }
    init(callback) {
        if (!firebase.apps.length) { // Create the application as a default firebase app
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {

            if (user) { // Sign in with existing user

            }
            else { //Sign in with anonymous user
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                })
            }

        })
    }
}

export default Fire;