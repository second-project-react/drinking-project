import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home';

import Sidebar from './components/Sidebar';
import Navigation from './components/Navbar'
import ShotsList from './components/slider/Shots'
import MocktailsList from './components/slider/Mocktails'
import CreamyList from './components/slider/Creamy'
import PunchList from './components/slider/PunchList';
import ClassicsList from './components/slider/ClassicsList'
import Cocktail from './components/slider/Cocktail'

import {Container} from "react-bootstrap";


import Ingredient from './components/Ingredient';


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

            <Route path='/shots' exact component={ShotsList} />
            <Route path='/shots/:id' exact component={Cocktail} />
         
            <Route path='/mocktails' exact component={MocktailsList} />
            <Route path='/mocktails/:id' exact component={Cocktail} />
            
            <Route path='/creamy' exact component={CreamyList}/>
            <Route path='/creamy/:id' exact component={Cocktail} />

            <Route path='/classics' exact component={ClassicsList}/>
            <Route path='/classics/:id' exact component={Cocktail} />

            <Route path='/punch' exact component={PunchList}/>
            <Route path='/punch/:id' exact component={Cocktail} />
          </Switch>
          </div>
          </div>

       </Container>
   </Router>
  )

}

export default App;