import React, { useEffect, useState } from 'react';
import Axios from 'axios';


function Card1(){

   const [value, setValue]= useState([])
 
   useEffect(()=>{
      Axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15300')
           .then((response) => response.data)
        .then((data)=>{
            setValue(data)
            console.log(data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }, [])

    
    return(
        <div>
            <h1>Hellloooooo</h1>
            <h2>{value.drinks[0].strDrink}</h2>
            <img src={value.drinks[0].strDrinkThumb}></img>
          <p>{value.drinks[0].strInstructions}</p>
        </div>)
    
}

export default Card1;