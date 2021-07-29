import './MultiIngredient.css'
import ModalDisplay from './mainCarousel/ModalDisplay';
import React, { useEffect, useState } from 'react';

function IngredientCard({ cocktailList }) {
  const [cardValue, setCardValue] = useState(false);
  // const[idValue,setIDValue]= useState('');
  const clickHandler = (id) => {
    setCardValue(true)
    // setIDValue(id)
    // console.log(idValue)
    console.log(cocktailList.idDrink)
  }

   return (
     <div>
       <div onClick={()=>clickHandler() }>
       
         <img src={cocktailList.strDrinkThumb} alt={cocktailList.strDrink} className='multiCardImg' />
       
         <h5 className='multidrinkName'>{cocktailList.strDrink}</h5>
     
         </div>
       <ModalDisplay
        cocktailid={cocktailList.idDrink}
        show={cardValue}
        onHide={() => setCardValue(false)} />
       
     </div>
  )
  
 }
 
 
 export default IngredientCard
// const IngredientCard = ({ cocktailList }) => {

//    return (
//       <div>


   
//           <CardGroup> 
    
//             <Col xs={8}md={6} >
//          <Card>
//          <Card.Img  className="ingredientImage"variant="top" src={cocktailList.strDrinkThumb} />
//          <Card.Body>
//          <Card.Title>{cocktailList.strDrink}</Card.Title>
//             {/* <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//          </Card.Text> */}
//          </Card.Body>
//       {/* <Card.Footer>
//          <small className="text-muted">Last updated 3 mins ago</small>
//          </Card.Footer> */}
//             </Card>
//             </Col>
        
            
        
  
//        </CardGroup>

//          </div>
//    )
// }
// export default IngredientCard



