import { React, useEffect, useState } from 'react';
import axios from 'axios';
import DrinkCard from './DrinkCard';
import './DrinkList.css';

export default function CreamyList() {
   const [drinks, setDrinks] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?c=Milk_/_Float_/_Shake`
         )
         .then((data) => {
            setDrinks(data.data.drinks);
         })

         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <div className="mainDiv">
         <h2 className="drinkType">Creamy Drinks</h2>
         <h5 className="qoute">
            "Alcohol may be man’s worst enemy, but the bible says love your
            enemy ;)"
         </h5>
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
      </div>
   );
}
