import './Surprise.css';
import { Code, RefreshCcw } from 'react-feather';
import Axios from 'axios'
import React, {  useState } from 'react';


const Surprise = () => {
   
  
  
   const getRandom = () => {
      Axios.get('https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php')
      .then((response)=>{
         setRandom(response.data.drinks[0])
         return response.data.drinks[0]
      })
      .catch((error)=>{
        console.log(error)
      })
   }
   const [random, setRandom] = useState(getRandom)


   // Animation Code


   const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    console.log("timer started!");
    const interval = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 10);
    return () => {
      clearInterval(interval);
      console.log("timer stopped");
    };
  }, []);

   






   return(
      <div className="surpriseWrapper">
         {/* <div className="surpriseTitleWrapper">
            <h2 className="surpriseTitle">Surprise Me!</h2>
            <div className="surpriseRefresh" onClick={getRandom}><RefreshCcw size={50}/></div>
         </div>
        
         <div className="surpriseImg"> 
           <img src = './img/surpriseme.png' alt="random cocktail" />
         </div>
         
         <div  className="surpriseDesc">
            <h3>{random?.strDrink}</h3>
         </div> */}

<div id="loader">
    <div id="lemon" style={timer >=100 ? {opacity: 1} : {opacity: 0} }></div>
    <div id="straw"></div>
    <div id="glass">
        <div id="cubes">
            <div></div>
            <div></div>
            <div></div>
        </div>
               <div id="drink" style={{top: (100-timer*.9)+'%'}}></div>
        <span id="counter"></span>
    </div>
    <div id="coaster"></div>
</div>

      </div>
   );
}
export default Surprise