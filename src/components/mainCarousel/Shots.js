import {React, useEffect, useState} from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'
import './DrinkList.css'


export default function ShotsList() {
    
    const [drinks, setDrinks] = useState([])
    
    useEffect(()=> {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?c=Shot`) 
        .then((data) => {
            setDrinks(data.data.drinks)
        })
        
        .catch((error)=> {
            console.log(error)
        })
    }, [])
    
    return (
        <div className='mainDiv'>
            <h2 className='drinkType'>Shots</h2>
            {/* <hr size="8" width="40%" color="gray"></hr>  */}
            <h5 className='qoute'>"When life gives you lemons, bust out the Tequila and the salt ;) "</h5>
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
