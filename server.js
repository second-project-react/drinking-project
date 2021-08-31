require('dotenv').config();

const express = require('express');
const app = express();
const database = require('./config.js');

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.setHeader('Access-Control-Allow-Credentials', true);
   res.setHeader('Access-Control-Allow-Headers', '*');
   next();
});

database.connect((err) => {
   if (err) {
      console.error('Error connecting: ' + err.stack);
   } else {
      console.log('Connected succesfully to external database');
   }
});

// Table messages
app.get('/message', (req, res) => {
   database
      .promise()
      .query('SELECT * FROM messages')
      .then((data) => {
         res.send(data[0]);
      })
      .catch((err) => {
         console.log(err);
      });
});

app.post('/message', (req, res) => {
   const { name, email, message } = req.body;
   database
      .promise()
      .query('INSERT INTO messages (name, email, message) VALUES(?,?,?)', [
         name,
         email,
         message,
      ])
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
});

// Table newsletter
app.get('/subscribers', (req, res) => {
   database
      .promise()
      .query('SELECT * FROM newsletter')
      .then((data) => {
         res.send(data[0]);
      })
      .catch((err) => {
         console.log(err);
      });
});

app.post('/subscribe', (req, res) => {
   const { name, email } = req.body;
   database
      .promise()
      .query('INSERT INTO newsletter (name, email) VALUES(?,?)', [name, email])
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
});

app.get('/favorites/user/:id', (req, res) => {
   const id = req.params.id;
   database
      .promise()
      .query('SELECT * FROM favorites WHERE userId = (?)', [id])
      .then((data) => {
         res.send(data[0]);
      })
      .catch((err) => {
         console.log(err);
      });
});

app.get('/favorites/cocktail/:id/:userId', (req, res) => {
   const id = req.params.id;
   const userId = req.params.userId;

   console.log(id);
   database
      .promise()
      .query('SELECT * FROM favorites WHERE idDrink = (?) AND userId = (?)', [
         id,
         userId,
      ])
      .then((data) => {
         res.send(data[0]);
      })
      .catch((err) => {
         console.log(err);
      });
});

app.get('/favorites/delete/:id/:userId', (req, res) => {
   const id = req.params.id;
   const userId = req.params.userId;

   database
      .promise()
      .query('SELECT * FROM favorites WHERE idDrink = (?) AND userId = (?)', [
         id,
         userId,
      ])
      .then((data) => {
         console.log(data);
         database
            .promise()
            .query('DELETE FROM favorites WHERE id = (?)', [data[0][0].id])
            .then(() => {
               res.send('deleted');
            });
      })
      .catch((err) => {
         console.log(err);
      });
});

app.post('/favorites', (req, res) => {
   const { idDrink, strDrink, strDrinkThumb, userId } = req.body;
   database
      .promise()
      .query(
         'INSERT INTO favorites (idDrink, strDrink, strDrinkThumb,userId) VALUES(?,?,?,?)',
         [idDrink, strDrink, strDrinkThumb, userId]
      )
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
});

// Login
app.post('/login', (req, res) => {
   const { username, password } = req.body;
   console.log(username);
   database
      .promise()
      .query('SELECT * FROM users WHERE username = (?)', [username])
      .then((data) => {
         if (data[0][0].password == password) {
            res.send(data[0][0]);
         } else {
            res.send(null);
         }
      })
      .catch((err) => {
         console.log(err);
         res.send(null);
      });
});

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// UPDATE note

app.listen(5000, () => {
   console.log('Server is ready in PORT 5000');
});
