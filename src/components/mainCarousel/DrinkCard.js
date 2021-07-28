
// import { Link } from 'react-router-dom';
import './DrinkCard.css'
import React, { useEffect, useState } from 'react'
import ModalDisplay from './ModalDisplay'

// function DrinkCard (props) {
//   return (
//     <div>
//       <Link to={`/shots/${props.drinkId}`}>
//       <img src={props.drinkImage} alt="props.shotsName" className='img' />
//       <h5 className='drinkName'>{props.drinkName}</h5>
//       </Link>
//     </div>
//   )
// }


// export default DrinkCard

function DrinkCard (props){

  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div>
    <img src={props.drinkImage} alt="props.shotsName" className='img' onClick={() => setModalShow(true)  }/>
      <h5 className='drinkName'>{props.drinkName}</h5>
      {console.log(props.drinkId)}
      <ModalDisplay
        cocktailid={props.drinkId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      
        
      />
    </div>
  )
}

export default DrinkCard;








