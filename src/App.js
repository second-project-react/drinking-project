import React from 'react';
import './App.css';
import Axios from 'axios';
import Surprise from './components/Surprise';



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// process.env.REACT_APP_SECRET_KEY
export default function App() {

  const getData = () => {
    Axios.get('www.thecocktaildb.com/api/json/v2/9973533/filter.php?id=15300')
    .then((response)=>{
     console.log(response)
     return response
    })
    .catch((error)=>{
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
    <div className="App">
      <h1>Our second project Cocktails{getData()}</h1>
      <Surprise />
      <Carousel responsive={responsive}>
        <div><img src='./img/1.jpg' style={{width:"200px" }}></img></div>
        <div><img src='./img/group9.png' style={{width:"200px" }}></img></div>
        <div><img src='./img/3.jpg' style={{width:"200px" }} alt='secondimg'></img></div>
        <div><img src='./img/4.jpg'></img></div>
        <div><img src='./img/7.png'></img></div>
      </Carousel>;
      </div>
  )
}

  
  


