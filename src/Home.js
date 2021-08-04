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

         <div className="bottomPart">

         {/* <div className="secondRow"> */}

         <Surprise />
         <CarouselSecond />
         




{/* </div> */}


    </div>

    

    </Container>

   )

}

export default Home