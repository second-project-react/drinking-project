import {React, useEffect, useState} from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'
import './DrinkList.css'


export default function MocktailsList() {
    
    const [drinks, setDrinks] = useState([])
    
    useEffect(()=> {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?c=Soft_Drink_/_Soda`) 
        .then((data) => {
            setDrinks(data.data.drinks)
        })
        
        .catch((error)=> {
            console.log(error)
        })
        }, [])

    return (
        <div className='mainDiv'>
            <h2 className='drinkType'>Mocktails</h2>
            {/* <hr size="8" width="40%" color="gray"></hr>  */}
            <h5 className='qoute'>“Live for today, plan for tomorrow, party tonight, party tonight.”</h5>
            <div className='listOfDrinks'>
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
        
    )   
}
