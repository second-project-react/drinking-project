import { React, useEffect, useRef, useState } from "react";
import ModalDisplay from './mainCarousel/ModalDisplay'

const CarouselSecondCard = ({ displayItem, displayIndex }) => {
   
   const [modalDisplay, setModalDisplay] = useState(false);
   const imageArray = [
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
   return (
      <div>
         <img src={imageArray[displayIndex]} alt="cocktailImage" onClick={()=>setModalDisplay(true)}/>
         <h5> {displayItem.strDrink }</h5>

         <ModalDisplay
            cocktailid={displayItem.idDrink}
            show={modalDisplay}
            onHide={() => setModalDisplay(false)}     
          />
      </div>
   )
}
 export default CarouselSecondCard