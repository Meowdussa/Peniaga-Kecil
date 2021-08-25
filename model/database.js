require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: "Mysql93949602",
  database: DB_NAME || "peniaga",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists owner; CREATE TABLE owner(id INT NOT NULL AUTO_INCREMENT, shop_name VARCHAR(40) not null, address VARCHAR(40) not null, menu VARCHAR(200),PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `owner` was successful!");

    console.log("Closing...");
  });

  con.end();
});
