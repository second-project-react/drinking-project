import { React, useEffect, useState } from "react";
import axios from "axios";
import LatestCard from "./LatestCard";
import DrinkCard from "./mainCarousel/DrinkCard";
import "./mainCarousel/DrinkList.css";
import Carousel from "react-multi-carousel";

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


// export default function Latest() {
//   const [latest, setLatest] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`)

//       .then((data) => {
//         setLatest(data.data.drinks);
//       })

//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

  
//   return (
//     <div className="mainDiv">
//       <h2 className="drinkType">LATEST COCKTAILS</h2>

//       <hr size="8" width="40%" color="gray"></hr>
//       <h5 className="qoute">
//         "I said no to alcohol but it just does not listen"
//       </h5>
//       <div className="listOfDrinks">
//         {latest.map((item, index) => (
//           <DrinkCard
//             key={index}
//             latestName={item.strDrink}
//             latestImage={array[index]}
//             latestId={item.idDrink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Latest({ deviceType }) {

  const [shots, setShots] = useState([])

  const array = [
    "./img/latest-butterfly.png.png",
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
    
 
  
  useEffect(()=> {
      axios
      .get(`https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`) 
      .then((data) => {
          setShots(data.data.drinks)
      })
      
      .catch((error)=> {
          console.log(error)
      })
      }, [])

  return (
      <div className='mainDiv'>
          <h2 className='drinkType'>LATEST</h2>
          <hr size="8" width="40%" color="gray"></hr> 
          <h5 className='qoute'>"I said no to alcohol but it just does not listen"</h5>
          <div className='listOfDrinks'>
              {shots.map((drink, index) => (
                  <DrinkCard 
                      key={drink.idDrink}
                      drinkName={drink.strDrink}
                      drinkImage={drink.strDrinkThumb}
                      drinkId={drink.idDrink}
                  />
              ))}
          </div>
      </div>
      )  
      </Carousel>
  
}

