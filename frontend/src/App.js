import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import './index';
import Fire from '../../backend/Firestore/database';
import { render } from 'react-dom';
 
class App extends React.Component{

  state = {
    users: {}
  }
  
  componentDidMount(){
    firebase = new Fire((error, user) => {
      if(error){
       return alert("Something went wrong")
       // throw error;
      }
    });
  }

  render(){
    return(
      <>
  
      </>
    )
  }
}



export default App;
