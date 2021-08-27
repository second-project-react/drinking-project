import axios from 'axios';
import React, { useEffect,useState } from 'react'

import DrinkCard from '../mainCarousel/DrinkCard'
import '../mainCarousel/DrinkCard.css'



const Favorites = () => {
   const [favItems, setFavItems] = useState([]);

   useEffect(() => {
   
    //~getting logged in user data from local storage and save the user id along with the favorite cocktail data
    getFavoriteCocktails()
    setInterval(() => {
        getFavoriteCocktails()
        }, 5000)
   },[])

//~Get complete list of favorites per User logged in
    const getFavoriteCocktails = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        console.log("settimeout")
        if (user) {
           
    axios.get(`http://localhost:5000/favorites/user/${user.id}`)
    .then((response) => response.data)
   .then((data)=>{
        setFavItems(data)
    })
  .catch((error) => {
    console.log(error);
  });
}
  }  
 
   
   return (
      <div className='mainDiv'>
          <h2 className='drinkType'>Favorites</h2>
          {/* <hr size="8" width="40%" color="gray"></hr>  */}
         <h5 className='qoute'>"Life is short, wear your party pants and get drunk ;)"</h5>
         {/* <button onClick={clearAll}> Clear All </button> */}
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
   );
};
export default Favorites;
