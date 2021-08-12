import React from "react";
import './Home.css'

import Surprise from './components/Surprise'

import "react-multi-carousel/lib/styles.css";
import CarouselTop from "./components/CarouselTop";
import CarouselSecond from "./components/CarouselSecond";
import { Container } from "react-bootstrap";




const Home = (props) => {

   

  

   return (

      <Container fluid className="Home p-0">

         <div className="topPart">
            <CarouselTop />
         </div>

         <div className="secondRow">
           <div>
              <img src="./img/latest-butterfly.png" alt=""/>
               {/* <Surprise /> */}
           </div>
            
            
            {/* <div className="latestRow"> 
       <CarouselSecond />
    </div> */}
       
         </div>
    <div className="latestRow"> 
       <CarouselSecond />
    </div>

      

    </Container>

   )

}

export default Home