
import Carousel from "react-multi-carousel";
import ModalDisplay from './mainCarousel/ModalDisplay'
import { Link, } from 'react-router-dom'
import axios from 'axios'
import { React, useEffect, useState } from "react";


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

const CarouselSecond = ({ deviceType }) => {

  const [latest, setLatest] = useState([]);
    // const [cocktail,setCocktail]=useState(false)
  const [modalShow, setModalShow] = useState(false);
    const[cardID,setCardID]=useState('');

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`)

      .then((data) => {
        console.log(data.data.drinks);
        setLatest(data.data.drinks);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

const array = [
  "./img/latest-butterfly.png",
  "./img/latest-mountain-bramble.png",
  "./img/latest-pink-moon.png",
  "./img/latest-apple-highball.png",
  "./img/latest-frose.png",
  "./img/latest-galah.png",
  "./img/latest-snowday.png",
  "./img/lastest-winter-paloma.png",
  "./img/latest-winter-rita.png",
  "./img/latest-elderflower.png",
];
 
  const clickHandler = (itemID) => {
    setCardID(itemID)
    setModalShow(true)
  }
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

      {latest.map((item, index) => 
       (<div>
        <img src={array[index]} alt="props.shotsName" className='img' onClick={() => clickHandler(item.idDrink)} />
        <h5>{item.strDrink}</h5>
        {/* <h5 className='drinkName'>{props.drinkName}</h5> */}
       <ModalDisplay
          cocktailid={cardID}
          show={modalShow}
          onHide={() => setModalShow(false)}     
        />
      </div>))}
      
</Carousel>
)
}


 export default CarouselSecond;

  
 {/* //   <div>
      //     <img src={array[index]} alt="drink" onClick={() => setCocktail(true)}/> </div>
      //     <h5>{item.strDrink}</h5> 
         
      // )}
      //   <ModalDisplay
      //     cocktailid={latest.idDrink}
      //     show={cocktail}
      //     onHide={() => setCocktail(false)}
      //   />
      */}