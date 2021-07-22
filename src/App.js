import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home';

import Sidebar from './components/Sidebar';

import Navigation from './components/Navbar'
import Shots from './components/Shots'
import Cocktail from './components/Coctail'

import {Container, Row, Col } from "react-bootstrap";

// process.env.REACT_APP_SECRET_KEY

function App() {

  

  return (

    <Router>
      <Container fluid pr-0>

          <div className="content-wrapper">

               <div id="sidebar-wrapper">      

                 <Sidebar />

            

               </div>

          <div id="page-content-wrapper">

          <Navigation/>
          <Switch>
          <Route path='/' exact component={Home} />
          {/* Sidebar */}
          {/* <Route path='/spirits' component={Spirits} />
          <Route path='/multi-ingridient' component={MultiIngridient} />
          <Route path='/popular' component={Popular} />          */}

          <Route path='/shots' exact component={Shots} />
          <Route path='/shots/:id' exact component={Cocktail} />
         
          {/* <Route path='/mocktails' component={Mocktails} /> */}
          {/* <Route path='/creamies' component={Creamy} />
          <Route path='/classics' component={Classics} />
          <Route path='/punchs' component={Punch /> */}
          </Switch>
          </div>
          </div>

       </Container>
   </Router>
  )

}

export default App;