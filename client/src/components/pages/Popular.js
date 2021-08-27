import { React, useEffect, useState } from 'react';
import axios from 'axios';
import DrinkCard from '../mainCarousel/DrinkCard';
import '../mainCarousel/DrinkCard.css';

const Popular = () => {
   const [drinks, setDrinks] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`
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
         <h2 className="drinkType">Popular Cocktails</h2>
         <h5 className="qoute">
            "Hear no evil, speak no evil, and you won't be invited to cocktail
            parties"
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

export default Popular;
