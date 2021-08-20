
import Carousel from "react-multi-carousel";

import axios from 'axios'
import { React, useEffect, useRef, useState } from "react";
import CarouselSecondCard from "./CarouselSecondCard";
import './CarouselSecond.css';


const responsive = {
  // superLargeDesktop: {
  //   breakpoint: { 
  //     max: 4000, 
  //     min: 3001
  //    },
  //   items: 5,
  //   slidesToSlide: 1,
  //   partialVisibilityGutter: 0,
  // },

  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },

    items: 5,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },

  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },

    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },

  tablet: {
    breakpoint: {
      max: 1024,
      min: 465,
    },

    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 30,
  },
};

const CarouselSecond = ({ deviceType }) => {

  const [latest, setLatest] = useState([]);
    // const [cocktail,setCocktail]=useState(false)
  const [modalShow, setModalShow] = useState(false);
    const[cardID,setCardID]=useState('');
   
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/latest.php`)
      .then((response) => response.data)
      .then((data) => {
        //console.log(data.data.drinks);
        setLatest(data.drinks);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

   return (
  <div >
 <h4 className="featured">Featured Drinks</h4>
  
<Carousel className="carousel"
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={false}
  autoPlay={false}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  afterChange={(previousSlide, { currentSlide, onMove }) => {
    console.log(currentSlide)
       }}
       
     >
       
       {latest.map((item, index) => (
              <div >
                
               <CarouselSecondCard displayItem={item} displayIndex={index}/>
               </div>
            ))}
        </Carousel>
        </div>
  
)
}


 export default CarouselSecond;

  
