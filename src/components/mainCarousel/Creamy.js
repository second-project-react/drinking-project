import {React, useEffect, useState} from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'
import './DrinkList.css'


export default function CreamyList() {
    
    const [shots, setShots] = useState([])
    
    useEffect(()=> {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?c=Milk_/_Float_/_Shake`) 
        .then((data) => {
            setShots(data.data.drinks)
        })
        
        .catch((error)=> {
            console.log(error)
        })
        }, [])

    return (
        <div className='mainDiv'>
            <h2 className='drinkType'>Creamy Drinks</h2>
            {/* <hr size="8" width="40%" color  ="gray"></hr>  */}
            <h5 className='qoute'>"Alcohol may be man’s worst enemy, but the bible says love your enemy ;)"</h5>
            <div className='listOfDrinks'>
                {shots.map((drink, index) => (
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
