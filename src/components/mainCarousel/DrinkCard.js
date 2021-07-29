import React from "react"
import './DrinkCard.css'
import ModalDisplay from './ModalDisplay'

function DrinkCard (props){

  const [modalShow, setModalShow] = React.useState(false);
  
  return (

    <div>
      
      <img src={props.drinkImage} alt={props.drinkName} className='img' onClick={()=>setModalShow(true)} />
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