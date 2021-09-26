require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS || "Mysql93949602",
  database: DB_NAME || "peniaga",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =

    "DROP TABLE if exists owner; DROP TABLE if exists menu;DROP TABLE if exists item; CREATE TABLE owner (owner_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(15), password binary(60), shop_name VARCHAR(40), phone VARCHAR(15), address VARCHAR(100), city VARCHAR(40), PRIMARY KEY (owner_id)); CREATE TABLE header(owner_id INT, header_id INT NOT NULL AUTO_INCREMENT, header_caption VARCHAR(500), header_image VARCHAR(500), PRIMARY KEY (header_id), FOREIGN KEY (owner_id) REFERENCES owner(owner_id)); CREATE TABLE item (owner_id INT, item_id INT NOT NULL AUTO_INCREMENT, item_name VARCHAR(40), item_price VARCHAR(10), item_image VARCHAR(500), PRIMARY KEY (item_id), FOREIGN KEY (owner_id) REFERENCES owner(owner_id));";


  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `owner, header, item` were successful!");

    console.log("Closing...");
  });

  con.end();
});
