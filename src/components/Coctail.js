import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Cocktail.css';

function Cocktail({ match }){
  console.log(match)
    const [value, setValue]= useState({})
  
    useEffect(()=>{
       Axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${match.params.id}`)
            .then((response) => response.data)
         .then((data)=>{
             setValue(data.drinks[0])
         })
         .catch((error)=>{
           console.log(error)
         })
     }, [])
     console.log(value)
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

    const twoInOne = ((item, index) => allLiOfIngridientsAndMeasure.push(`${finalArrayOfMeasure[index]} - ${item} `))
    
    finalArrayOfIngredients.forEach(twoInOne);

      return(
         <div className="cocktail">
           <h2 className="card1_drinkName">{value.strDrink}</h2>
           <h5 className="drinkCategory">{value.strAlcoholic}</h5>
            {/* <h5 className="drinkCategory">{value.strGlass}</h5> */}

           <div className="container1">
            <div className="container1A">
              <img className="drinkImage" src={value.strDrinkThumb} alt="img"></img>
           </div>
           <div className="container1B">
             
             <h3 className="sectionName">INGREDIENTS</h3>
             <ul className="drinkIngredients">
              {allLiOfIngridientsAndMeasure.map((item) => <li>{item}</li>)}
               </ul>
             <h3 className="sectionName">INSTRUCTIONS</h3>
             <p className="drinkInstructions">{value.strInstructions}</p>
           </div>
           </div>
             
         </div>
      )
     
 }
 
export default Cocktail;
