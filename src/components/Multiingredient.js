
import { Container,Row, Col, SplitButton } from "react-bootstrap";
import Axios from 'axios'
import React, {  useEffect,useState } from 'react';
import IngredientCard from "./IngredientCard";
import './MultiIngredient.css'

const MultiIngredient = () => {
   const [searchValue, setSearchValue] = React.useState("");
   const [ingredient, setIngredient] = useState([]);
   const [selectIngredient, setSelectIngredient] = useState([]);
   const [displayIngredient, setDisplayIngredient] = useState([])

   useEffect(() => {
      Axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list')
         .then((response) => {
            // setRandom(response.data.drinks[0])
            console.log(response.data.drinks)
            const ingredientList = response.data.drinks.map((item) => {
                   // setRandom(response.data.drinks[0])
           return {...item, selected:false}
            })
            console.log(ingredientList)
         setIngredient(ingredientList)
      })
      .catch((error)=>{
        console.log(error)
      })

   }, [])
   

   useEffect(() => {
      let ingString = '';
      for (let i = 0; i < selectIngredient.length; i++){
         if (i < selectIngredient.length - 1) {
            ingString = ingString + selectIngredient[i].strIngredient1 + ',';
         } else {
            ingString = ingString + selectIngredient[i].strIngredient1
         }
      }
      // console.log('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i='+ingString)

      Axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingString}`)
      .then((response)=>{
         console.log(response.data.drinks)
         setDisplayIngredient(response.data.drinks)
      })
      .catch((error)=>{
        console.log(error)
      })
   }, [selectIngredient])
   
   
   const itemClicked = (item) => {

      item.selected = !item.selected;
         
      console.log(ingredient)
      setIngredient([...ingredient])
      let newArr = [];
      for (let i = 0; i < ingredient.length; i++){
         if (ingredient[i].selected) {
            newArr.push((ingredient[i]))
         }
      }setSelectIngredient([...newArr])
    }
    console.log(selectIngredient)

   const  listItems =
         ingredient
            .filter((item) => ((item.strIngredient1).toLowerCase()).includes((searchValue).toLowerCase()))
            .map((item, index) => {
               return (
                  // <div id="induvidualIngredient" >{index === 0 ? console.log(item.selected) : null} <button onClick={() => itemClicked(item)} style={item.selected ? { backgroundColor: "red" } : { backgroundColor: "white" }}>{item.strIngredient1}</button></div>

                  <div id="induvidualIngredient" onClick={() => itemClicked(item)} style={item.selected ? { backgroundColor: "red" } : { backgroundColor: "white" }}>{item.strIngredient1}   </div>
               )
            });

   console.log(ingredient)


   // const display =
   //    displayIngredient.length > 0 &&displayIngredient.map((items) => {
   //    return (

   //       <h1> {items.strDrink} </h1>
   //       )
   // });
   return (
      <div  className="multiIngredient">
<Container>
  <Row>
            <Col xs={4}>
               <div>
               <input id="inputField" type="text" placeholder="Type here..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
               </div>
               <div id="listIngredient" >
               {listItems}
                  {/* <ul id="listIngredient">{listItems}</ul> */}
               </div>
            </Col>
            <Col xs={8}>
               <h3>Selected Ingredients : </h3>
               {selectIngredient.map((items) => <p> {items.strIngredient1}</p>) }
               {displayIngredient !== 'None Found' ? displayIngredient.map((items) => <IngredientCard cocktailList={items}/>) : <h1> No Matches Found</h1>}
               
            </Col>
</Row>
</Container></div>
   );
}
export default MultiIngredient