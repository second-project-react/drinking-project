import React from "react";
import './Home.css'

import Surprise from './components/Surprise'







const Home = (props) => {
   

   return (
      <div className='home'>

         <div className="topPart">
         <h1>Our second project Cocktails</h1>
         </div>
         <div className="bottomPart">
         <Surprise />
    </div>
      
    </div>
   )
}
export default Home