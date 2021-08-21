import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Footer from "./Footer";

// Pages
// // MainPage
import Home from './Home';
// // Categories
import ShotsList from './components/mainCarousel/Shots'
import LongDrinksList from './components/mainCarousel/LongDrinksList'
import MocktailsList from './components/mainCarousel/Mocktails'
import CreamyList from './components/mainCarousel/Creamy'
import PunchList from './components/mainCarousel/PunchList';
import ClassicsList from './components/mainCarousel/ClassicsList'
// // Spirits
import Bourbon from './components/pages/spirits/Bourbon'
import Brandy from './components/pages/spirits/Brandy'
import Gin from './components/pages/spirits/Gin'
import Rum from './components/pages/spirits/Rum'
import Scotch from './components/pages/spirits/Scotch'
import Tequila from './components/pages/spirits/Tequila'
import Vodka from './components/pages/spirits/Vodka'
// // Lists of drinks
import Popular from './components/pages/Popular';
import Latest from './components/pages/Latest';
import Favorites from './components/pages/Favorites';








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
            <Route path='/longdrinks' exact component={LongDrinksList} />
            <Route path='/mocktails' exact component={MocktailsList} />
            <Route path='/creamy' exact component={CreamyList} />
            <Route path='/classics' exact component={ClassicsList} />
            <Route path='/punch' exact component={PunchList} />
            {/* Multi-ingridients */}
          <Route path='/multi-ingredients' exact component={Ingredient} />
        
            {/* Spirits */}
            <Route path='/bourbon' exact component={Bourbon} />
            <Route path='/brandy' exact component={Brandy} />
            <Route path='/gin' exact component={Gin} />
            <Route path='/rum' exact component={Rum} />
            <Route path='/scotch' exact component={Scotch} />
            <Route path='/tequila' exact component={Tequila} />
            <Route path='/vodka' exact component={Vodka} />
            {/* Popular */}
            <Route path='/popular' exact component={Popular} />
            {/* Latest */}
            <Route path='/latest' exact component={Latest} />
            {/* Surprise me */}
            <Route path='/surprise' exact component={Popular} />
            <Route path='/favorites' exact component={Favorites} />

          </Switch>
          <Footer/>
       </div>
   </Router>
  )

}

export default App;