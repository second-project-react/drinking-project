import React from 'react';
import './App.css';
import Axios from 'axios';

import Home from './Home';

import Sidebar from './components/Sidebar';
import Navigation from './components/Navbar'

import {Container, Row, Col } from "react-bootstrap";



 function App() {

  // const getData = () => {
  //   Axios.get('www.thecocktaildb.com/api/json/v2/9973533/filter.php?id=15300')
  // }
return (
    <>
      <Container fluid pr-0>
          <div className="content-wrapper">
                 <Sidebar />
            
               </div>
          <div id="page-content-wrapper">
          <Navigation/>
                   <Home />
            </div>
        
       </Container>
   </>
  )
}

export default App;

