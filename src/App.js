// import logo from './logo.svg';
import React from 'react';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero/Hero'



function App() {
  return (
  <Router>
    <NavigationBar/>

    <Switch>
      <Route path="/profile"><h1>Welcome!</h1>
      </Route>
      <Route exact path="/">
         <div className="App">
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
         <Hero/> 
         </div> 
      </Route>
    

    </Switch>
  </Router>
  );
}

export default App;
