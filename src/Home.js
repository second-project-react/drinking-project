import React from "react";

import { Container } from "react-bootstrap";

import { Link } from 'react-router-dom'

import Surprise from './components/Surprise'

import Carousel from "react-multi-carousel";

import './Home.css'

import "react-multi-carousel/lib/styles.css";

import Ingredient from "./components/Ingredient";

import CarouselTop from "./components/CarouselTop";

import CarouselSecond from "./components/CarouselSecond";

import Latest from "./components/Latest";



const Home = (props) => {

 


   return (

      <Container fluid className="Home p-0">

         <div className="topPart">

         

            <CarouselTop />

         </div>

         <div className="bottomPart">

         <div className="secondRow">

         <Surprise />
        
         <CarouselSecond />
         


       </div>
       </div >


   


      <Ingredient />

      <CarouselSecond />

      <Latest/>
    </Container>

   )

}

export default Home