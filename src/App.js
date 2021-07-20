import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Home from './Home';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navbar'

import {Container, Row, Col } from "react-bootstrap";


// process.env.REACT_APP_SECRET_KEY
function App() {
  

  return (

    <>
      <Container fluid pr-0>
          <div className="content-wrapper">
               <div id="sidebar-wrapper">      
                 <Sidebar />
            
               </div>
          <div id="page-content-wrapper">
          <Navigation/>
                   <Home />
            </div>
          </div>
       </Container>
   </>
  )
}

export default App;

