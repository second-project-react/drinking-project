import React, { useEffect,useState } from 'react'

import DrinkCard from '../mainCarousel/DrinkCard'
import '../mainCarousel/DrinkCard.css'


const Favorites = () => {
   const [favItems, setFavItems] = useState([]);
   
   useEffect(() => {
      let favList = JSON.parse(localStorage.getItem("favorites") || "[]")
      setFavItems(favList);
   },[favItems])
   
   const clearAll = () => {
      localStorage.clear();
   }
   return (
      <div className='mainDiv'>
          <h2 className='drinkType'>Favorites</h2>
          {/* <hr size="8" width="40%" color="gray"></hr>  */}
         <h5 className='qoute'>"Life is short, wear your party pants and get drunk ;)"</h5>
         <button onClick={clearAll}> Clear All </button>
          <div className='listOfDrinks'>
              {favItems.map((drink, index) => (
                  <DrinkCard 
                      key={drink.idDrink}
                      drinkName={drink.strDrink}
                      drinkImage={drink.strDrinkThumb}
                      drinkId={drink.idDrink}
                  />
              ))}
          </div>
      </div>
  )
}
export default Favorites;