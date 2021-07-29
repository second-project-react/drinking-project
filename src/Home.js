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

         <div className="secondRow">

<Surprise />



{/* <Link to='/shots'><div><img src='./img/butterfly.png' alt=""></img><h5>Shots</h5></div></Link>
<Link to='/mocktails'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Mocktails</h5></div></Link>
<Link to='/creamy'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Creamy</h5></div></Link>
<Link to='/classics'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Classics</h5></div></Link>
<Link to='/punch'><div><img src='./img/group9.png' style={{ width: "200px" }} alt=""></img><h5>Punch</h5></div></Link> */}



</div>


    </div>

       <CarouselSecond />

    </Container>

   )

}

export default Home