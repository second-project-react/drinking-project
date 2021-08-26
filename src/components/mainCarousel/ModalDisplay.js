import axios from "axios";
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
  
  //~When Modal loads, check if the cocktail from props is present in the local Storage, if so then set the favorite btn state to true!
  useEffect(() => {
    //~getting logged in user data from local storage and save the user id along with the favorite cocktail data
    const user = JSON.parse(localStorage.getItem("user"))

    if (props.show) {
      checkIfCocktailInDb(props.cocktailid, user.id)
    }

  }, [props.show])
  


  //~On click Fav button, change state => Favorite btn state: 0 = Initial state (app new loaded), 1 = Favorited state, 2 = not favorited state
  const favBtn = () => {

    //~getting logged in user data from local storage and save the user id along with the favorite cocktail data
    const user = JSON.parse(localStorage.getItem("user"))

    const drinkData = {
      idDrink: value.idDrink,
      strDrink: value.strDrink,
      strDrinkThumb: value.strDrinkThumb,
      userId: user.id
    }

    if (favoriteButton === 0)  {
      setFavoriteButton(1);
      //~save the cocktail to DB
      saveToDatabase(drinkData)
    } else if (favoriteButton === 1) {
      setFavoriteButton(2);
      //~delete the cocktail from DB of the specific user
      deleteCocktailfromDb(value.idDrink, user.id);
    }
    else if (favoriteButton === 2)
    {
      setFavoriteButton(1);
      //~save the cocktail to DB
      saveToDatabase(drinkData)
    }
  }
  
  const saveToDatabase = (item) => {
    Axios({
      method: "post",
      url: "http://localhost:5000/favorites",
      data: { idDrink : item.idDrink , strDrink: item.strDrink, strDrinkThumb: item.strDrinkThumb,userId:item.userId },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      }
    })
      .then((data) => {
        console.log(data.data[0])})

    .catch((error)=> {
        console.log(error)
    })
 }

  const checkIfCocktailInDb = (id, useId) => {
    console.log(id)
    Axios.get(`http://localhost:5000/favorites/cocktail/${id}/${useId}`)
    .then((response) => response.data)
   .then((data)=>{
     console.log(data)
     if (data[0].idDrink) {
      setFavoriteButton(1)
     }
  })
  .catch((error) => {
    console.log(error);
  });
  }  
 
  const deleteCocktailfromDb = (id, useId) => {
    console.log(id)
    Axios.get(`http://localhost:5000/favorites/delete/${id}/${useId}`)
    .then((response) => response.data)
   .then((data)=>{
     console.log(data)
     if (data === "deleted") {
      setFavoriteButton(2)
     }
  })
  .catch((error) => {
    console.log(error);
  });
  }
  

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


