import { React, useEffect, useState } from 'react';
import axios from 'axios';
import DrinkCard from '../../mainCarousel/DrinkCard';
import '../../mainCarousel/DrinkCard.css';

const Tequila = () => {
   const [drinks, setDrinks] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=Tequila`
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
         <h2 className="drinkType">Tequila</h2>
         <h5 className="qoute">
            "When life gives you lemons, bust out the Tequila and the salt ;)"
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
};

export default Tequila;
