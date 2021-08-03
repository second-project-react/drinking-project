import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import "./ModalDisplay.css";

function ModalDisplay(props) {
  const [value, setValue] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [cocktailId, setCocktailID] = useState(props.cocktailid);
  const[favoriteButton,setFavoriteButton]=useState(false)
  const arrayOfIngredients = [];
  let allLiOfIngridientsAndMeasure = [];
  const arrayOfMeasure = [];


  useEffect(() => {
    // setCocktailID(props.cocktailid);
    // console.log(cocktailId)
    Axios.get(
      `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${props.cocktailid}`
    )
      .then((response) => response.data)
      .then((data) => {
        setValue(data.drinks[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cocktailId, props.cocktailid]);

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
    .filter((item) => item !== null && item !== "" && item !== undefined)
    .map((item) => item);

  const twoInOne = (item, index) =>
    allLiOfIngridientsAndMeasure.push(
      `${finalArrayOfMeasure[index]} - ${item}`
    );

  finalArrayOfIngredients.forEach(twoInOne);

  console.log(allLiOfIngridientsAndMeasure);

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
                    <li>
                      {" "}
                      {item}{" "}
                      <img
                        class="ingredientImage"
                        src={`https://www.thecocktaildb.com/images/ingredients/${
                          item.split("- ")[1]
                        }-medium.png`}
                        alt="gin"
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
              <p className="drinkInstructions">{value.strInstructions}</p>
            </div>

              <div className={favoriteButton ? 'active favBtn' : 'favBtn' }  id="btn" onClick={ ()=>setFavoriteButton(!favoriteButton)}>
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


