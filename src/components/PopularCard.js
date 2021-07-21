import React from "react"
import './ShotCard.css'

function PopularCard (props) {
  return (
    <div>
      <img src={props.popularImage} alt="Popular Name" className='img' />
      
      <h5 className='drinkName'>{props.popularName}</h5>
      
    </div>
  )
}


export default PopularCard