const mysql = require('mysql');
require("dotenv").config();

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    passsword: process.env.MYSQL_PASSWORD,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS tamagochi", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        console.log(result);
    });
});