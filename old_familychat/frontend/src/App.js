import './App.css';
import Login from './Pages/Login/Login';

// Importing Firebase database dependencies
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import auth from 'firebase/auth';

//Importing the firebase hooks
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({ //Initializing the firebase application

})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
  return (
    <>
      <Login/>
    </>
  );
}

export default App;
