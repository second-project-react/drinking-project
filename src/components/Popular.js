import { React, useEffect, useState } from 'react';
import axios from 'axios';
import PopularCard from './PopularCard';
import './Shots.css';

export default function Popular() {
   const [popular, setPopular] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/popular.php`
         )
         .then((data) => {
            setPopular(data.data.drinks);
         })

         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <div className="mainDiv">
         <h2 className="drinkType">Popular</h2>
         <h5 className="qoute">
            "I said no to alcohol but it just does not listen"
         </h5>
         <div className="listOfShots">
            {popular.map((item, index) => (
               <PopularCard
                  key={index}
                  popularName={item.strDrink}
                  popularImage={item.strDrinkThumb}
                  popularId={item.idDrink}
               />
            ))}
         </div>
      </div>
   );
}
