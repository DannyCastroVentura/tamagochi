const express = require('express');
const mysql = require('mysql');
require("dotenv").config();

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    passsword: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS tamagochi", function (err, result) {
      if (err) throw err;
      console.log("Database created");
      console.log(result);
    });
  });

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

