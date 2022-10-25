import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import fs from 'fs';

dotenv.config();

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  passsword: process.env.MYSQL_PASSWORD,
  multipleStatements: true
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE tamagochi", function (err, result) {
    if (err) {
      if (err.code === 'ER_DB_CREATE_EXISTS')
        console.log('Database already created!');
      else
        throw err;
    } else {
      console.log("Database created");
      const dataSql = fs.readFileSync('./src/database/db.sql').toString();
      con.query(dataSql, (err, result) => {
        if (err)
          throw err;
        console.log('Tables created!')
      });
    }
  });
});

const app = express();
const port = 3080;
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

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

