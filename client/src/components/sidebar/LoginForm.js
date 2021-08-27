import axios from 'axios';
import React, { useState, useEffect } from 'react';
 import './LoginForm.css'

const LoginForm = () => {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [loggedIn, setLoggedIn] = useState(false);
   const [userData, setUserData] = useState({});


   //~On initial load of app, check if user present in the LocalStorage and set the userData from the local storage
   useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"))
      if (userData) {
         setLoggedIn(true)
         setUserData(userData)
      } else {
         setLoggedIn(false)
      }
   },[])



   const handleSubmit = (e) => {
      e.preventDefault();
      axios({
        method: "post",
        url: "http://localhost:5000/login",
        data: { username: username , password: password},
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
        }
      })
         .then((data) => {
            console.log(data.data)
            if (data.data.id) {
               setLoggedIn(true)
               setUserData(data.data)
               //~Set localstorage of the logged in user
               localStorage.setItem('user', JSON.stringify(data.data));
               setUserName("");
               setPassword("");
            } else {
               alert("User not found or Password incorrect!");
            }
         })
      .catch((error)=> {
          console.log(error)
      })
   };
   

   const logout = () => {
      setLoggedIn(false)
      setUserData({})
      //~Remove user data when logged out from localstorage
      localStorage.removeItem('user')
   }

   
   return (
      <div>
        {!loggedIn ?
         <form className="formInputWrapper" onSubmit={handleSubmit}>
         <input
            className="inputBoxForm"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}></input>
               {/* <label>Password</label> */}
               <input
            className="inputBoxForm"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
            <button className="submitButtonForm"type="submit">Login</button>
            </form>
            :
            <div>
            <h2 className="formGreeting"> Hello {userData.username}</h2>
               <button className="LogoutButtonForm" ype="submit" onClick={logout}>Logout</button>
               </div>
           }
      </div>

   )

}
export default LoginForm