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




const Home = (props) => {

   

  

   return (

      <Container fluid className="Home p-0">

         <div className="topPart">

            <CarouselTop />

         </div>

         <div className="bottomPart">

         <div className="secondRow">

<Surprise />



{/* <Link to='/shots'><div><img src='./img/butterfly.png' alt=""></img><h5>Shots</h5></div></Link>

<Link to='/mocktails'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Mocktails</h5></div></Link>

<Link to='/creamy'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Creamy</h5></div></Link>

<Link to='/classics'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Classics</h5></div></Link>

<Link to='/punch'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Punch</h5></div></Link> */}



</div>


    </div>

   
       <Ingredient />
       <CarouselSecond />

    </Container>

   )

}

export default Home