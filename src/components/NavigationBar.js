
import React from 'react';
import './NavigationBar.css';
import {Link} from 'react-router-dom';



const NavigationBar = ()=> {
    return(
      <header className="NavigationBar">
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/profile"><li>Profile</li></Link>
            </ul>
          </nav>
        </header>
  
    )
  }

  export default NavigationBar;