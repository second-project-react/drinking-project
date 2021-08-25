import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import "./ModalDisplay.css";





function ModalDisplay(props) {
  const [value, setValue] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  const [cocktailId, setCocktailID] = useState(props.cocktailid);
  const[favoriteButton,setFavoriteButton]=useState(0)
  const arrayOfIngredients = [];
  let allLiOfIngridientsAndMeasure = [];
  const arrayOfMeasure = [];
  const [instrLanguageHandler, setInstrLanguageHandler] = useState(value.strInstructions)

  


  useEffect(() => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${props.cocktailid}`)
        .then((response) => response.data)
       .then((data)=>{
        setValue(data.drinks[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cocktailId, props.cocktailid]);
  
  useEffect(() => {
    if (props.show) {
      let initialList = JSON.parse(localStorage.getItem("favorites") || "[]");
      if ((initialList.findIndex((e)=>e.idDrink===value.idDrink))!==-1) {
        setFavoriteButton(1)
      }
    }

 },[props.show])
  useEffect(() => {
    let favList = [];
   
    favList = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (favoriteButton === 1) {
      if ((favList.findIndex((e) => e.idDrink === value.idDrink)) === -1){
        favList.push(value);
        localStorage.setItem('favorites', JSON.stringify(favList)); 
      }
      
      
    } else if(favoriteButton===2) {
      let deleteIndex = favList.findIndex((e)=>e.idDrink===value.idDrink)
      console.log(deleteIndex)
      favList.splice(deleteIndex,1);
       localStorage.setItem('favorites', JSON.stringify(favList)); 
    }
  }, [favoriteButton])
  
  const favBtn = () => {
    if (favoriteButton === 0)  {
      setFavoriteButton(1);
    } else if (favoriteButton === 1) {
      setFavoriteButton(2);
    }
    else if (favoriteButton === 2)
    {setFavoriteButton(1);
       }
  }
  
    
    // if (localStorage.getItem('favorites')) {
    //   favList = localStorage.getItem('favorites');
    // }
    // favList.push(value.idDrink);
  
  
 
  

  for (let i = 1; i <= 15; i++) {
    arrayOfIngredients.push(value["strIngredient" + i]);
  }

  for (let i = 1; i <= 15; i++) {
    arrayOfMeasure.push(value["strMeasure" + i]);
  }

  const finalArrayOfIngredients = arrayOfIngredients
    .filter((item) => item !== null && item !== "" && item !== undefined)
    .map((item) => item);

  const finalArrayOfMeasure = arrayOfMeasure
    .filter((item) => item !== null && item !== "" && item !== undefined )
    .map((item) => item);

  const twoInOne = (item, index) =>
    allLiOfIngridientsAndMeasure.push(
       `${finalArrayOfMeasure[index] ? finalArrayOfMeasure[index] : 'as desired'} - ${item}`

    );

  finalArrayOfIngredients.forEach(twoInOne);

  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
           Modal heading
         </Modal.Title> */}
      </Modal.Header>

      <Modal.Body>
        {props.show && isLoading && cocktailId !== value.idDrink ? (
          <div className="cocktail">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <div className="cocktail">
            {/* <h2 className="card1_drinkName">{user}</h2> */}
            <h2 className="card1_drinkName">{value.strDrink}</h2>
            <h5 className="drinkCategory">{value.strAlcoholic}</h5>
            {/* <h5 className="drinkCategory">{value.strGlass}</h5> */}

            <div className="container1">
              <div className="container1A">
                <img
                  className="drinkImage"
                  src={value.strDrinkThumb}
                  alt="img"
                ></img>
              </div>
              <div className="container1B">
                <h3 className="sectionName1">INGREDIENTS</h3>
                <ul className="drinkIngredients">
                  {allLiOfIngridientsAndMeasure.map((item) => (
                    <li className="ingredientName">
                      {" "}
                      {item}{" "}
                      <img
                        class="ingredientImage"
                        src={`https://www.thecocktaildb.com/images/ingredients/${
                          item.split("- ")[1]
                        }-medium.png`}
                        alt="ingredient"
                      />
                      {/* <img
                        class="ingredientImageHover"
                        src={`https://www.thecocktaildb.com/images/ingredients/${
                          item.split("- ")[1]
                        }-medium.png`}
                        alt="gin"
                      /> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="container2">
              <h3 className="sectionName2">INSTRUCTIONS</h3>
              <div className="flags">
                {value.strInstructionsDE ? <img className="flag" src="/img/flagGERicon.png" alt="ger" onClick={(e) => setInstrLanguageHandler(value.strInstructionsDE)}/> : null}
                {value.strInstructionsIT ? <img className="flag" src="/img/flagITAicon.png" alt="it" onClick={(e) => setInstrLanguageHandler(value.strInstructionsIT)}/> : null}
                {value.strInstructions ? <img className="flag" src="/img/flagUKicon.png" alt="uk" onClick={(e) => setInstrLanguageHandler(value.strInstructions)}/> : null}
                {value.strInstructionsFR ? <img className="flag" src="/img/flagFRAicon.png" alt="fr" onClick={(e) => setInstrLanguageHandler(value.strInstructionsFR)}/> : null}
                {value.strInstructionsES ? <img className="flag" src="/img/flagSPAicon.png" alt="es" onClick={(e) => setInstrLanguageHandler(value.strInstructionsES)}/> : null}
              </div>
              <p className="drinkInstructions">{instrLanguageHandler || value.strInstructions}</p>
            </div>

              <div className={favoriteButton===1 ? 'active favBtn' : 'favBtn' }  id="btn" onClick={ ()=> favBtn () }>
              <div className="heart"></div>
              <h3>Favorite this!</h3>
            </div>
          </div>
        )}
      </Modal.Body>

      {/* 
       <Modal.Footer>
         <Button onClick={props.onHide}>Close</Button>
       </Modal.Footer> */}
    </Modal>
  );
}

export default ModalDisplay;


