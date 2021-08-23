
import { Container,Row, Col, Spinner} from "react-bootstrap";
import Axios from 'axios'
import React, {  useEffect,useState } from 'react';
import IngredientCard from "./IngredientCard";
import './MultiIngredient.css'

const MultiIngredient = () => {
   const [searchValue, setSearchValue] = React.useState("");
   const [ingredients, setIngredients] = useState([]);
   const [selectIngredient, setSelectIngredient] = useState([]);
   const [displayItems, setDisplayItems] = useState([])
   const [isLoading, setIsLoading] = useState(true);


   useEffect(() => {
      Axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?i=list`)
         .then((response) => {
            const ingredientList = response.data.drinks.map((item) => {
            return {...item, selected:false}
            })
            setIngredients(ingredientList)
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

      Axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${ingString}`)
      .then((response)=>{
         setDisplayItems([...response.data.drinks]);
         setIsLoading(false);
      })
      .catch((error)=>{
        console.log(error)
      })
   }, [selectIngredient])
   
   
   const itemClicked = (item) => {
      item.selected = !item.selected;
      setIsLoading(true);  
      setIngredients([...ingredients])
      let newArr = [];
      for (let i = 0; i < ingredients.length; i++){
         if (ingredients[i].selected) {
            newArr.push((ingredients[i]));
         }
      }
      setSelectIngredient([...newArr]);
   }
   

   const deleteIngredient = (index,name) => {
      selectIngredient.splice(index, 1);
      setSelectIngredient([...selectIngredient]);
      const ingredientList = ingredients.map((item) => {
         if (item.strIngredient1 === name) {
            console.log(item.strIngredient1)
            item.selected = false;
         }
         return { ...item }
         })
      setIngredients([...ingredientList])
   }

   

   const  listItems =
   ingredients
            .filter((item) => ((item.strIngredient1).toLowerCase()).includes((searchValue).toLowerCase()))
            .map((item, index) => {
               return (
                  // <div id="induvidualIngredient" >{index === 0 ? console.log(item.selected) : null} <button onClick={() => itemClicked(item)} style={item.selected ? { backgroundColor: "red" } : { backgroundColor: "white" }}>{item.strIngredient1}</button></div>

                  <div className={item.selected? "chipMain chipActive" : "chipMain" } onClick={() => itemClicked(item)}>
                              {item.strIngredient1}
                     {/* <span class="closebtn" onClick={() => itemClicked(item)}> </span> */}
                              
                              </div>

                  // <div id="induvidualIngredient" onClick={() => itemClicked(item)} style={item.selected ? { backgroundColor: "red" } : { backgroundColor: "white" }}>{item.strIngredient1}   </div>
               )
            });



   // const display =
   //    displayIngredient.length > 0 &&displayIngredient.map((items) => {
   //    return (

   //       <h1> {items.strDrink} </h1>
   //       )
   // });
   return (
      <div  className="multiIngredient">
      <Container>
         
            <div className="muliTitleDiv">
            <div className="muliTitle">
               <h1 ClassName="muliTitleh1">Search By Ingredients</h1>
  
             
            </div>
               {/* <hr className="custom-hr" size="50" width="40%" ></hr> */}
               </div>
            <Row>
               
               <Col s={12} xs={12} md={10} l={4} xl={4}>
                  <div className="selectBox"> 
                     <div className="multiInputfield">
      
                      <input id="inputField" type="text" placeholder="  Search here..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                  </div>
                  <div >
                        <p className='multiSelected'> Selected Ingredients : </p>
                
                      
                           {selectIngredient.map((items, index) => <button class="chip" onClick={()=>(deleteIngredient(index,items.strIngredient1))}>
                              {items.strIngredient1}
                              <span class="closebtn">  &times;</span>
                              
                              </button> ) }
              
                  </div>
                  <div id="listIngredient" >
                  {listItems}
                  {/* <ul id="listIngredient">{listItems}</ul> */}
                  </div>
                  </div>
            </Col>
               <Col xs={12} s={12} md={12} l={8} xl={8}>
                  <div className="multiCardList">
                     { isLoading ?
                        <Spinner animation="border" variant="dark" /> :
                        (displayItems[0] !== 'N' ? displayItems.map((items) => <IngredientCard cocktailList={items} />) : <h1> No Matches Found</h1>)
                     }
               </div>
            </Col>
         </Row>
       
         </Container>
         </div>
     
   );
}
export default MultiIngredient