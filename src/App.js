import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes"

import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero/Hero'
import SignUpForm from './components/SignUpForm';





function App() {
  return (
  <Router>
    <NavigationBar/>

    <Switch>
      <Route path={ROUTES.SIGN_UP}component={SignUpForm}/>
      <Route exact path={ROUTES.HOME} component={Hero}/>
    </Switch>
  </Router>
  );
}

export default App;
