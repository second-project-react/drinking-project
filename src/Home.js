import React from "react";
import {Container} from "react-bootstrap";
import Axios from 'axios'


import Surprise from './components/Surprise'
import Card1 from './components/Card1'
import Carousel from "react-multi-carousel";
import Shots from './components/Shots'
import CarouselTop from "./components/CarouselTop";


import './Home.css'
import "react-multi-carousel/lib/styles.css";


const Home = (props) => {

   const getData = () => {
      Axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list')
        .then((response) => {
          console.log(response)
          return response
        })
        .catch((error) => {
          console.log(error)
        })
    }

   
 
   return (
      <Container fluid className="Home p-0">
         <div className="topPart">
         <h1>Our second project Cocktails</h1>
         <CarouselTop deviceType="desktop"/>
         </div>
         <Shots />
         <div className="bottomPart">
         <Surprise />
        {/* <Carousel responsive={responsive}>
        <div><img src='./img/1.jpg' style={{ width: "200px" }} alt=""></img></div>
        <div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img></div>
        <div><img src='./img/3.jpg' style={{ width: "200px" }} alt='secondimg'></img></div>
        <div><img src='./img/4.jpg' alt=""></img></div>
        <div><img src='./img/7.png' alt=""></img></div>
      </Carousel> */}
      <Card1/>
    </div>
    </Container>
   )
}
export default Home