import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

import Surprise from './components/Surprise'
import Carousel from "react-multi-carousel";





import './Home.css'
import "react-multi-carousel/lib/styles.css";


const Home = (props) => {
   
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
         <h1>Our second project Cocktails</h1>
         </div>
         <div className="bottomPart">
         <Surprise />
        <Carousel responsive={responsive}>
        <Link to='/shots'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Shots</h5></div></Link>
        <Link to='/mocktails'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Mocktails</h5></div></Link>
        <Link to='/creamy'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Creamy</h5></div></Link>
        <Link to='/classics'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Classics</h5></div></Link>
        <Link to='/punch'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Punch</h5></div></Link>
      </Carousel>
    </div>
      
    </Container>
   )
}
export default Home