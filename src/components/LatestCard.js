import React from "react"
import './ShotCard.css'



function LatestCard (props) {

  
  return (
    <div>
      <img src={props.latestImage} alt="latest cocktail" className='img' />
      <h5 className='drinkName'>{props.latestName}</h5>   
    </div>
  )
}


export default LatestCard