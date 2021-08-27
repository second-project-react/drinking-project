import { React, useEffect, useState } from 'react';
import axios from 'axios';
import DrinkCard from '../../mainCarousel/DrinkCard';
import '../../mainCarousel/DrinkCard.css';

const Brandy = () => {
   const [drinks, setDrinks] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=Brandy`
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
         <h2 className="drinkType">Brandy</h2>
         <h5 className="qoute">
            "A party without a drink is afterall just a meeting!"
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

export default Brandy;
