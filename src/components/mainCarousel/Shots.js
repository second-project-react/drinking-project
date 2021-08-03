import {React, useEffect, useState} from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'
import './DrinkList.css'


export default function ShotsList() {
    
    const [shots, setShots] = useState([])
    
    useEffect(()=> {
        axios
        .get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Shot') 
        .then((data) => {
            setShots(data.data.drinks)
        })
        
        .catch((error)=> {
            console.log(error)
        })
    }, [])
    
    return (
        <div className='mainDiv'>
            <h2 className='drinkType'>SHOTS</h2>
            <hr size="8" width="40%" color="gray"></hr> 
            <h5 className='qoute'>"I said no to alcohol but it just does not listen"</h5>
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
