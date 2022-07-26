import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/FirebaseContext';
import {firebase} from "./firebase/firebaseConfig"

//2.In the top level we're going to call Firebase Context and wrap the intire app in a firebaseContext so that
//when ever we want to use it in in the app it will be possible. 
//The value is now firebase
//The <App/> becomes a child of the context.
//We need the context in thesign up form where the authorization of the user will be done.
//Next SignUpForm.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FirebaseContext.Provider value ={{firebase}}>
    <App />
  </FirebaseContext.Provider>
  </React.StrictMode>
);


reportWebVitals();
