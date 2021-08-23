import './Surprise.css';
import { Code, RefreshCcw } from 'react-feather';
import Axios from 'axios'
import React, {  useEffect, useState } from 'react';
import ModalDisplay from './mainCarousel/ModalDisplay';
import IngredientCard from './IngredientCard';

const Surprise = () => {
   
   const [random, setRandom] = useState({})
   const [modalShow, setModalShow] = useState(false);
   const [timer, setTimer] = React.useState(0);

   const getRandom = () => {
      Axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`)
      .then((response)=>{
         setRandom(response.data.drinks[0])
         setModalShow(true)
         setTimer(0)
         return response.data.drinks[0]
      })
      .catch((error)=>{
        console.log(error)
      })
   }



   // Animation Code
  const loaderAnimate = () => {
      console.log("timer started!");
      const interval = setInterval(() => {
         setTimer((prevState) => {
            if (prevState > 101) {
               clearInterval(interval);
               console.log("timer stopped");
               return 101;
            } else {
             return prevState + 0.3;
             }
         });
     }, 10);
  };

   
   useEffect(() => {
      if (timer === 101) {
         getRandom()
      }

   }, [timer])



   return(
      <div className="surpriseWrapper">
         {/* <div className="surpriseTitleWrapper">
            <h2 className="surpriseTitle">Surprise Me!</h2>
            <div className="surpriseRefresh" onClick={getRandom}><RefreshCcw size={50}/></div>
         </div>
        
         <div className="surpriseImg"> 
            <img src={random?.strDrinkThumb} alt="random cocktail" />
         </div>
         
         <div  className="surpriseDesc">
            <h3>{random?.strDrink}</h3>
         </div> */}
        
           
                <ModalDisplay
                cocktailid={random.idDrink}
                show={modalShow}
                onHide={() => setModalShow(false)}
              
                
              />
          <div style={timer !== 0 ? { display: 'none' } : { display: 'block' }}>
            <div className="surpriseTitle">
               <h1>Don't know what to Drink tonight??!</h1>
               <div className="subtitle">
                  <h4>Try our random cocktail generator</h4>
                  <img className="surpriseCocktail" src="./img/mai-thai.png" alt="drink" />
               </div>
                <div  style={timer === 0 ? { display: 'none' } : { display: 'block' }}> Your Drink is getting Filled</div>
                  {/* <div class="spinner" style={timer === 0 ? { display: 'none' } : { display: 'block' }}></div>  */}
              
               
               </div>
            </div>
         
         <div className="cocktailLoader" onClick={()=>loaderAnimate()}>
         <div id="loader">
               <div id="lemon" style={{ opacity: 1 }}></div>
            <div id="straw" style={ {opacity: 1} }></div>
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
      </div>
   );
}
export default Surprise