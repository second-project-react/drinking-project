require("dotenv").config();

const express = require("express");
const app = express();
const database = require("./config.js");

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Headers","*" )
  next();
});

database.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
  } else {
    console.log("Connected succesfully to external database");
  }
});

// Table messages
app.get("/message", (req, res) => {
  database
    .promise()
    .query("SELECT * FROM messages")
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/message", (req, res) => {
  const { name, email, message } = req.body;
  database
  .promise()
  .query("INSERT INTO messages (name, email, message) VALUES(?,?,?)", [name, email, message])
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
  });

  // Table newsletter
  app.get("/subscribers", (req, res) => {
    database
      .promise()
      .query("SELECT * FROM newsletter")
      .then((data) => {
        res.send(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/subscribe", (req, res) => {
    const { name, email } = req.body;
    database
    .promise()
    .query("INSERT INTO newsletter (name, email) VALUES(?,?)", [name, email])
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
    });



// UPDATE note

app.listen(5000, () => {
  console.log("Server is ready in PORT 5000");
});