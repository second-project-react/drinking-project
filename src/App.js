
import React from 'react'
import './App.css'
import Slider1 from './components/Slider1/Slider1.js'
import Axios from 'axios'


function App() {

  const getData = () => {
    Axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list')
    .then((response)=>{
     console.log(response)
     return response
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  return (
    <div  className="App">

      <h1>Our Second Project Cocktails</h1>

      <Slider1 data= {getData}/>

    </div>
  )
}

export default App;
