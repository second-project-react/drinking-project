import React from "react"
import { Link } from 'react-router-dom';
import './DrinkCard.css'

function DrinkCard (props) {
  return (
    <div>
      <Link to={`/shots/${props.drinkId}`}>
      <img src={props.drinkImage} alt="props.shotsName" className='img' />
      <h5 className='drinkName'>{props.drinkName}</h5>
      </Link>
    </div>
  )
}


export default DrinkCard