import React from "react"
import { Link } from 'react-router-dom';
import './DrinkCard.css'

function DrinkCard (props) {
  console.log(props)
  return (
    <div>
      <Link to={`/mocktails/${props.drinkId}`}>
      <img src={props.drinkImage} alt={props.drinkName} className='img' />
      <h5 className='drinkName'>{props.drinkName}</h5>
      </Link>
      {console.log(props)}
    </div>
  )
}


export default DrinkCard