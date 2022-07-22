// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero/Hero'



function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavigationBar/>
      <Hero/>
    </div>
  );
}

export default App;
