import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  "./CarouselTop.css";
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
      max: 699,
      min: 0,
    },

    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },

  tablet: {
    breakpoint: {
      max: 1024,
      min: 700,
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
      }}
  
>
      <div><Link to='/classics'> <div className="carouselTopImage"><img src="./img/classics.png" alt="drink" /></div><h5 className="carouselTopLinks link-2">Classics</h5></Link></div>
       <div><Link to='/shots'><div className="carouselTopImage"><img src="./img/shot.png" alt="drink" /></div><h5 className="carouselTopLinks link">Shots</h5></Link></div>
      <div> <Link to='/longdrinks'> <div className="carouselTopImage"><img src="./img/longdrinks.png" alt="drink" /></div><h5 className="carouselTopLinks link">Long Drinks</h5> </Link> </div>
       <div><Link to='/creamy'><div className="carouselTopImage"><img src="./img/creamy.png" alt="drink" /></div><h5 className="carouselTopLinks link">Creamy</h5></Link></div>
       <div><Link to='/punch'><div className="carouselTopImage"><img src="./img/punch.png" alt="drink" /></div><h5 className="carouselTopLinks link">Punch</h5></Link></div>
      <div><Link to='/mocktails'><div className="carouselTopImage"><img src="./img/mocktail.png" alt="drink" /></div><h5 className="carouselTopLinks link">Mocktails</h5></Link></div>
</Carousel>
  );
};

export default CarouselTop;
