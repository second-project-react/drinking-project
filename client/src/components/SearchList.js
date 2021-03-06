import { React, useEffect, useState } from 'react';
import axios from 'axios';
import DrinkCard from './mainCarousel/DrinkCard';
import './mainCarousel/DrinkList.css';

export default function SearchList({ match }) {
   const [drinks, setDrinks] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/search.php?s=${match.params.search}`
         )
         .then((data) => {
            setDrinks(data.data.drinks);
         })

         .catch((error) => {
            console.log(error);
         });
   });

   return (
      <div className="mainDiv">
         <h2 className="drinkType">From the Search Bar</h2>
         <h5 className="qoute">
            “Live for today, plan for tomorrow, party tonight, party tonight.”
         </h5>
         {match.params.search ? 
         drinks ? (
            <div className="listOfDrinks">
               {drinks.map((drink, index) => (
                  <DrinkCard
                     key={drink.idDrink}
                     drinkName={drink.strDrink}
                     drinkImage={drink.strDrinkThumb}
                     drinkId={drink.idDrink}
                  />
               ))}
            </div>
         ) : (
            <h4>Sorry, this drink does not exist!</h4>
         )
         :  
         (<h4>No drink selected!</h4>) 
         }
      </div>
   );
}
