import React from "react";
import {Container} from "react-bootstrap";
import Axios from 'axios'
import Surprise from './components/Surprise'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Home.css'

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

   
  const responsive = {
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 3,
     slidesToSlide: 3 // optional, default to 1.
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2,
     slidesToSlide: 2 // optional, default to 1.
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
     slidesToSlide: 1 // optional, default to 1.
   }
   };
   return (
      <Container fluid className="Home p-0">
         <div className="topPart">
         {/* <h1>Our second project Cocktails</h1> */}
         </div>
         <div className="bottomPart">
         <Surprise />
        <Carousel responsive={responsive}>
        <div><img src='./img/1.jpg' style={{ width: "200px" }} alt=""></img></div>
        <div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img></div>
        <div><img src='./img/3.jpg' style={{ width: "200px" }} alt='secondimg'></img></div>
        <div><img src='./img/4.jpg' alt=""></img></div>
        <div><img src='./img/7.png' alt=""></img></div>
      </Carousel>
  
      </div>
      
    </Container>
   )
}
export default Home