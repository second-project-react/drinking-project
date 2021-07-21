import React from "react"
import { Link } from 'react-router-dom';
import './ShotCard.css'

function ShotCard (props) {
  return (
    <div>
      <Link to={`/shots/${props.shotsId}`}>
      <img src={props.shotsImage} alt="props.shotsName" className='img' />
      <h5 className='drinkName'>{props.shotsName}</h5>
      </Link>
    </div>
  )
}


export default ShotCard