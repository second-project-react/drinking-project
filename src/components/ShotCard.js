import React from "react"
import './ShotCard.css'

function ShotCard (props) {
  return (
    <div>
      <img src={props.shotsImage} alt="props.shotsName" className='img' />
      
      <h5 className='drinkName'>{props.shotsName}</h5>
      
    </div>
  )
}


export default ShotCard