import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';

// Pages
// // MainPage
import Home from './Home';
// // Categories
import ShotsList from './components/mainCarousel/Shots'
import MocktailsList from './components/mainCarousel/Mocktails'
import CreamyList from './components/mainCarousel/Creamy'
import PunchList from './components/mainCarousel/PunchList';
import ClassicsList from './components/mainCarousel/ClassicsList'
// // Spirits
import Bourbon from './components/pages/spirits/Bourbon'
import Brandy from './components/pages/spirits/Brandy'
import Gin from './components/pages/spirits/Gin'
import Liqueur from './components/pages/spirits/Liqueur'
import Rum from './components/pages/spirits/Rum'
import Scotch from './components/pages/spirits/Scotch'
import Tequila from './components/pages/spirits/Tequila'
import Vodka from './components/pages/spirits/Vodka'








import Ingredient from './components/Ingredient';


// process.env.REACT_APP_SECRET_KEY
function App() {
  

  return (

    <Router>
      <div className='App'>
          <Sidebar />
          <Switch>          
            <Route path='/' exact component={Home} />
            {/* Categories */}
            <Route path='/shots' exact component={ShotsList} />
            <Route path='/mocktails' exact component={MocktailsList} />
            <Route path='/creamy' exact component={CreamyList}/>
            <Route path='/classics' exact component={ClassicsList}/>
            <Route path='/punch' exact component={PunchList}/>
            {/* Spirits */}
            <Route path='/bourbon' exact component={Bourbon} />
            <Route path='/brandy' exact component={Brandy} />
            <Route path='/gin' exact component={Gin}/>
            <Route path='/liqueur' exact component={Liqueur}/>
            <Route path='/rum' exact component={Rum}/>
            <Route path='/scotch' exact component={Scotch}/>
            <Route path='/tequila' exact component={Tequila}/>
            <Route path='/vodka' exact component={Vodka}/>
          </Switch>

       </div>
   </Router>
  )

}

export default App;