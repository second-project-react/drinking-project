import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

import Home from './Home';

import Sidebar from './components/Sidebar';
import Navigation from './components/Navbar'

import {Container, Row, Col } from "react-bootstrap";
import Ingredient from './Ingredient';
import Card1 from './components/Card1'

// process.env.REACT_APP_SECRET_KEY
function App() {
  
  const [menuItem, setMenuItem] = useState(1)

  const toggleMenu = (item) => {
    setMenuItem(item)
  }

  return (

    <>
      <Container fluid pr-0>
          <div className="content-wrapper">
               <div id="sidebar-wrapper">      
                  <Sidebar itemSelect={toggleMenu}/>
               </div>
          <div id="page-content-wrapper">
            <Navigation />
            {menuItem === 1 && <Home />}
            {menuItem === 2 && <Home />}
            {menuItem === 3 && <Home />}
            {menuItem === 4 && <Ingredient />}
            </div>
          </div>
       </Container>
   </>
  )
}

export default App;

