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
    "DROP TABLE if exists owner; DROP TABLE if exists menu; DROP TABLE if exists item; CREATE TABLE owner (owner_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(15), password VARCHAR(1000), shop_name VARCHAR(40) not null, phone VARCHAR(15), address VARCHAR(100) not null, city VARCHAR(40), PRIMARY KEY (owner_id)); CREATE TABLE menu(menu_id INT NOT NULL AUTO_INCREMENT, owner_id INT NOT NULL, PRIMARY KEY (menu_id), FOREIGN KEY (owner_id) REFERENCES owner(owner_id)); CREATE TABLE item (item_id INT NOT NULL AUTO_INCREMENT, item_name VARCHAR(255),owner_id INT NULL,item_notes varchar (255) NULL, item_price VARCHAR(15), PRIMARY KEY (item_id));";

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `owner, menu, item` were successful!");

    console.log("Closing...");
  });

  con.end();
});
