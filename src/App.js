import React, { useState } from 'react';
import './App.css';

import {Route} from 'react-router-dom'

import Home from './Home';

import Sidebar from './components/Sidebar';

import Navigation from './components/Navbar'

import {Container } from "react-bootstrap";
import Ingredient from './Ingredient';


// process.env.REACT_APP_SECRET_KEY
function App() {
  
  const [menuItem, setMenuItem] = useState(1)

  const toggleMenu = (item) => {
    setMenuItem(item)
  }

return(
    <>          

<Container fluid className="p-0">
 
 <div className="content-wrapper">
      <div id="sidebar-wrapper">      
        <Sidebar itemSelect={toggleMenu} />
      </div>

 <div id="page-content-wrapper">
   <Navigation />
    <Home />
   
   </div>
 
   </div>
 
 </Container>

   </>

  )

}

export default App;