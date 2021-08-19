import './Footer.css';
import React, { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICK", email);
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank You for your message");
  };

  return (
   
    <div className="footerContainer">
        
      <div className="nameContainer">
        <div className="socialContainer">
          <p>Alexej Holad</p>
          <a href="https://github.com/AlexHolad" target="new">
            <img className="socialIconSmall" src="./img/github1.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/alexejholad/" target="new">
            <img className="socialIconSmall" src="./img/linkedin2.png" alt="" />
          </a>
        </div>
        <div className="socialContainer">
          <p>Sasmitha Nagesh</p>
          <a href="https://github.com/Sashmu" target="new">
            <img className="socialIconSmall" src="./img/github1.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/sasmitha-nagesh-9818336b/"
            target="new"
          >
            <img className="socialIconSmall" src="./img/linkedin2.png" alt="" />
          </a>
        </div>
        <div className="socialContainer">
          <p>Pallavi Das</p>
          <a href="https://github.com/pallavid08" target="new">
            <img className="socialIconSmall" src="./img/github1.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/das-pallavi/" target="new">
            <img className="socialIconSmall" src="./img/linkedin2.png" alt="" />
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
            <img className="footerIcons" src="./img/js-format.png" alt="" />
            <img className="footerIcons" src="./img/atom.png" alt="" />
          </div>
        </div>
        <div className="madeWith">
          <p>
            <span>Made with ♥︎ by Students</span>{" "}
            <span>at Wild Code School</span>
          </p>
        </div>
      </div>

      <div className="formContainer">
        <div>Drop a Message</div>
        <div className="allLabels">
          <form className="formInputWrapper" onSubmit={handleSubmit}>
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
              style={{ height: "50px" }}
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
