import './Footer.css';
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from "react";
import axios from 'axios'
>>>>>>> 9c4a1f7a1471c1f269383c0554f341726d9c83da

const Footer = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [thanks, setThanks] = useState('Drop a Message');

<<<<<<< HEAD
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('CLICK', email);
      setName('');
      setEmail('');
      setMessage('');
      setThanks('Thanks A Lot 😊');
   };
=======
    
    // axios.post('http://localhost:5000/message', { name:'pallavi',email:'pal@gmail.com',message:'connecting react to db'},)
    //   .then((data) => {
    //   console.log("Hi Jaime")
    //    console.log(data.data[0])
    // Jaime's code
  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/message",
  //     data: { name: 'pallavi', email: 'pal@gmail.com', message: 'connecting react to db' },
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-type': 'application/json',
  //     }
  //   })
  //     .then((data) => {
  //       console.log("Hi Jaime")
  //       console.log(data.data[0])})
   
    
  //   .catch((error)=> {
  //       console.log(error)
  //   })
  // }, [])
  
//   const res = await axios.post('https://httpbin.org/post', { hello: 'world' });

// res.data.json;


  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/message",
      data: { name: name , email: email, message: message },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      }
    })
      .then((data) => {
        console.log("Hi Jaime")
        console.log(data.data[0])})
   
    
    .catch((error)=> {
        console.log(error)
    })


    console.log("CLICK", email);
     setName("");
     setEmail("");
     setMessage("");
    alert("Thank You for your message");
  };
>>>>>>> 9c4a1f7a1471c1f269383c0554f341726d9c83da

   return (
      <div className="footerContainer">
         <div className="nameContainer">
            <div className="socialContainer">
               <p>Alexej Holad</p>
               <a href="https://github.com/AlexHolad" target="new">
                  <img
                     className="socialIconSmall"
                     src="./img/github1.png"
                     alt=""
                  />
               </a>
               <a href="https://www.linkedin.com/in/alexejholad/" target="new">
                  <img
                     className="socialIconSmall"
                     src="./img/linkedin2.png"
                     alt=""
                  />
               </a>
            </div>
            <div className="socialContainer">
               <p>Sasmitha Nagesh</p>
               <a href="https://github.com/Sashmu" target="new">
                  <img
                     className="socialIconSmall"
                     src="./img/github1.png"
                     alt=""
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/sasmitha-nagesh-9818336b/"
                  target="new"
               >
                  <img
                     className="socialIconSmall"
                     src="./img/linkedin2.png"
                     alt=""
                  />
               </a>
            </div>
            <div className="socialContainer">
               <p>Pallavi Das</p>
               <a href="https://github.com/pallavid08" target="new">
                  <img
                     className="socialIconSmall"
                     src="./img/github1.png"
                     alt=""
                  />
               </a>
               <a href="https://www.linkedin.com/in/das-pallavi/" target="new">
                  <img
                     className="socialIconSmall"
                     src="./img/linkedin2.png"
                     alt=""
                  />
               </a>
            </div>
         </div>

         <div className="centerContainer">
            <div className="iconsContainer">
               <div>
                  <p>Technologies</p>
               </div>
               <div className="iconsWrapper">
                  <img className="footerIcons" src="./img/html1.png" alt="" />
                  <img className="footerIcons" src="./img/css1.png" alt="" />
                  <img
                     className="footerIcons"
                     src="./img/js-format.png"
                     alt=""
                  />
                  <img className="footerIcons" src="./img/atom.png" alt="" />
               </div>
            </div>
            <div className="madeWith">
               <p>
                  <span>Made with ♥︎ by Students</span>{' '}
                  <span>at Wild Code School</span>
               </p>
            </div>
         </div>

         <div className="formContainer">
            <div className="allLabels">
               <form
                  action=""
                  method="POST"
                  className="formInputWrapper"
                  onSubmit={handleSubmit}
               >
                  <div>{thanks}</div>

                  <input
                     className="inputBox"
                     type="text"
                     placeholder="Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />

                  <input
                     className="inputBox"
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                     className="inputBox"
                     type="text"
                     placeholder="Message"
                     style={{ height: '50px' }}
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />

                  <button type="submit">Send</button>
               </form>
            </div>
         </div>
      </div>
   );
};
export default Footer;
