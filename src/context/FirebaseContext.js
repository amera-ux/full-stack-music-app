import { createContext } from "react";
// 1. we create the firebasecontext because we want to use the firebase
   //context in several parts of our app. Here the context gets the value of null
   //Next index.js
export const FirebaseContext = createContext(null);