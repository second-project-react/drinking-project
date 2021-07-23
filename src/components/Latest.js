import {React, useEffect, useState} from 'react'
import axios from 'axios'
import LatestCard from './LatestCard'
import './Shots.css'




export default function Latest() {
    
    const [latest, setLatest] = useState([])
    
    useEffect(()=> {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`) 
        
        .then((data) => {
            setLatest(data.data.drinks)
        })
        
        .catch((error)=> {
            console.log(error)
        })
        }, [])



        const array=["./img/latest1.png", "./img/latest2.png", "./img/latest3.png", "./img/latest3.png","./img/latest3.png","./img/latest3.png","./img/latest3.png","./img/latest3.png","./img/latest3.png","./img/latest3.png"]
    
     
 


    return (
        <div className='mainDiv'>
            <h2 className='drinkType'>LATEST COCKTAILS</h2>
           
                
            <hr size="8" width="40%" color="gray"></hr> 
            <h5 className='qoute'>"I said no to alcohol but it just does not listen"</h5>
            <div className='listOfShots'>
                {latest.map((item, index) => (
                    <LatestCard 
                        key={index}
                        latestName={item.strDrink}
                        latestImage={array[index]}
                        latestId={item.idDrink}
                    />
                ))} 
                
            </div>
       
        </div>
        
    )   
}
