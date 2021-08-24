import {React, useEffect, useState} from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'
import './DrinkList.css'
// import Loader from '../Loader'


export default function ClassicsList() {
    
    const [drinks, setDrinks] = useState([])
    // const [done, setDone] = useState(undefined)
    
    useEffect(()=> {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?c=Ordinary_Drink`) 
        .then((data) => {
            setDrinks(data.data.drinks)
            // setTimeout(() => {
            //     setDone(true)
            // }, 2500)
            
        })
        
        .catch((error)=> {
            console.log(error)
        })
        }, [])

    return (
        //  !done ?
        //     <Loader />
        //     :
        <div className='mainDiv'>
            <h2 className='drinkType'>Classics</h2>
            <h5 className='qoute'>"Time to drink Champagne and Dance on the table"</h5>
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
