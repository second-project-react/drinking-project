import React, { useEffect, useState } from 'react';
import Axios from 'axios';


function Card1(){

   const [value, setValue]= useState({})
 
   useEffect(()=>{
      Axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15300')
           .then((response) => response.data)
        .then((data)=>{
            setValue(data.drinks[0])
            console.log(data.drinks[0])
        })
        .catch((error)=>{
          console.log(error)
        })
    }, [])

    
    return(
        <div>
            <h1>Hellloooooo</h1>
            <h2>{value.strDrink}</h2>
            <img src={value.strDrinkThumb} alt="img"></img>
          <p>{value.strInstructions}</p>
        </div>)
    
}

export default Card1;

// Filtering Ingredient
// let arr=[];
// for(let i=1;i<=15;i++){
//   // console.log( drink.drinks[0]['strIngredient'+i])
//   arr.push(drink.drinks[0]['strIngredient'+i])
// }
// // console.log(arr);

// let filterarray=arr.filter((item)=>{
//   return item!==null &&  item !=='' &&  item !== undefined
// }).map((items)=>items)
 


// console.log(filterarray)