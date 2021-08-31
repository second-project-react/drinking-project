import React, { useState } from 'react';
import './NewsletterStyles.css';
import axios from "axios"
import Realistic from './Confetti';

const Newsletter = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [signup, setSignUp] = useState('Sign Up For Our Newsletter ');

   const handleSubmit = (e) => {
      e.preventDefault();
      axios({
         method: 'post',
         url: 'http://localhost:5000/subscribe',
         data: { name: name, email: email },
         headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
         },
      })
         .then((data) => {
            console.log(data.data[0]);
         })

         .catch((error) => {
            console.log(error);
         });

      console.log('CLICK', email);
      setName('');
      setEmail('');
      setSignUp('Check Your Inbox!');
      // alert("Thank You for your message");
   };

   return (
      <div className="newsletterContainer">
         <div className="formNewsContainer">
            <div className="allLabels">
               <form className="formInputWrapper" onSubmit={handleSubmit}>
                  <div className="signUpContainer">
                     <h3 className="signUp">{signup}</h3>
                     <img
                        className="emaillIconSmall"
                        src="./img/email1.png"
                        alt="email"
                     />
                  </div>
                  <input
                     className="inputBoxNewsletter"
                     type="text"
                     placeholder="Name"
                     value={name}
                     required="true"
                     onChange={(e) => setName(e.target.value)}
                  />

                  <input
                     className="inputBoxNewsletter"
                     type="email"
                     placeholder="Email"
                     value={email}
                     required="true"
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <Realistic />
               </form>
            </div>
         </div>
      </div>
   );
};
export default Newsletter;
