import './Surprise.css';
import { RefreshCcw } from 'react-feather';
import Axios from 'axios'
import React, {  useState } from 'react';

const Surprise = () => {
   
  
  
   const getRandom = () => {
      Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response)=>{
         setRandom(response.data.drinks[0])
         return response.data.drinks[0]
      })
      .catch((error)=>{
        console.log(error)
      })
   }
   const [random, setRandom] = useState(getRandom)

   
   console.log(random);
   return(
      <div className="surpriseWrapper">
         <div className="surpriseTitleWrapper">
            <h2 className="surpriseTitle">Surprise Me!</h2>
            <div className="surpriseRefresh" onClick={getRandom}><RefreshCcw size={30}/></div>
         </div>
         <div className="surpriseImg">
            {/* <img src='/assets/img/c.png' alt="" /> */}

            <img src={random?.strDrinkThumb} alt="random cocktail" />
         </div>
         <div  className="surpriseDesc">
            <h3>{random?.strDrink}</h3>
         </div>
      </div>
   );
}
export default Surprise