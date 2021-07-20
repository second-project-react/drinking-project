import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Card1.css';

function Card1(){

    const [value, setValue]= useState({})
  
    useEffect(()=>{
       Axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=15300')
            .then((response) => response.data)
         .then((data)=>{
             setValue(data.drinks[0])
         })
         .catch((error)=>{
           console.log(error)
         })
     }, [])
 
     const arrayOfIngredients=[]; 
     for(let i=1; i<=15; i++){
        arrayOfIngredients.push(value['strIngredient'+i])
      }
      console.log(arrayOfIngredients)
      const arrayOfMeasure=[]; 
     for(let i=1; i<=15; i++){
        arrayOfMeasure.push(value['strMeasure'+i])
      }
      
    const finalArrayOfIngredients = arrayOfIngredients
                                      .filter((item) => item!==null &&  item !==''  &&  item !== undefined)
                                      .map((item) => item)
     
    const finalArrayOfMeasure = arrayOfMeasure
                                      .filter((item) => item!==null &&  item !==''  &&  item !== undefined)
                                      .map((item) => item)
    

    let allLiOfIngridientsAndMeasure = [];

    const twoInOne = ((item, index) => allLiOfIngridientsAndMeasure.push(`${item} - ${finalArrayOfMeasure[index]}`))
    finalArrayOfIngredients.forEach(twoInOne);

     return(
         <div className="Card1">
             <h2 className="drinkName">{value.strDrink}</h2>
             <img className="drinkImage" src={value.strDrinkThumb} alt="img"></img>
             <h3 className="sectionName">INGREDIENTS</h3>
             <ul className="drinkIngredients">
              {allLiOfIngridientsAndMeasure.map((item) => <li>{item}</li>)}
               </ul>
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