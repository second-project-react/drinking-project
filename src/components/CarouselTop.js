import React from "react";
import Carousel from "react-multi-carousel";

import { Link } from 'react-router-dom'


const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },

    items: 3,
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
      min: 200,
    },

    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 30,
  },
};

const CarouselTop = ({ deviceType }) => {

  return (
<Carousel
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
<Link to='/classics'> <div><div><img src="./img/classics.png" alt="drink" /></div><h5>Classics</h5></div></Link>
      <Link to='/shots'> <div><div><img src="./img/shot.png" alt="drink" /></div><h5>Shots</h5></div></Link>
      <Link to='/shots'> <div><div><img src="./img/longdrinks.png" alt="drink" /></div><h5>Long Drinks</h5></div></Link>
      <Link to='/creamy'> <div><div><img src="./img/creamy.png" alt="drink" /></div><h5>Creamy</h5></div></Link>
      <Link to='/punch'> <div><div><img src="./img/punch.png" alt="drink" /></div><h5>Punch</h5></div></Link>
      <Link to='/mocktails'> <div><div><img src="./img/mocktail.png" alt="drink" /></div><h5>Mocktails</h5></div></Link>

  {/* <div> <img src="./img/classics.png" alt="drink" /></div>
  <div> <img src= "./img/shot.png"alt="drink"/></div>
      <div> <img src="./img/longdrinks.png" alt="drink" /></div>
      <div> <img src="./img/creamy.png" alt="drink" /></div>
      <div> <img src="./img/punch.png" alt="drink" /></div>
      <div> <img src="./img/mocktail.png" alt="drink"/></div> */}
</Carousel>
  );
};

export default CarouselTop;
