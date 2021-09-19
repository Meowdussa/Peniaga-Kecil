var express = require("express");
var router = express.Router();
const db = require("../model/helper");


const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const {createTokens,validateToken} = require('./JWT');
const app = express();

app.use(express.json());
app.use(cookieParser());

/* GET all owner listing. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM owner")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

const allOwners = (req, res, next) => {
  db("SELECT * FROM owner")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

//get one owner
router.get("/id/:id", function (req, res, next) {
  db(`SELECT shop_name,address,phone FROM owner WHERE owner_id=${req.params.id};`)
    .then((results) => {
      // allOwners(req, res);
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// get city
router.get("/city/:id", function (req, res, next) {
  db(`SELECT city FROM owner WHERE owner_id=${req.params.id};`)
    .then((results) => {
      // allOwners(req, res);
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//delete a shop
router.delete("/:id", function (req, res, next) {
  db(`DELETE FROM owner WHERE owner_id=${req.params.id}`)
    .then((results) => {
      res.send(results.data);
      res.send("Delete succesful");
    })
    .catch((err) => res.status(500).send(err));
});

// register
router.post("/", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    await db(
      `INSERT INTO owner (username, password, shop_name, phone, address, city) VALUES ("${req.body.username}","${hash}","${req.body.shop_name}","${req.body.phone}","${req.body.address}","${req.body.city}")`
    );
    res.send({ message: "Berjaya daftar!" });
    allOwners(req, res);
  } catch (err) {
    res.status(404).send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
   const results = await db(
      `SELECT * FROM owner WHERE username='${req.body.username}'`);
  
    const user = results.data[0];

    //pedro
      if(!user) res.status(400).send({ message: "Pengguna tidak wujud" });

      
      bcrypt.compare(req.body.password, user.password).then((match) => {
        if(!match) {
          res.status(400).send({message: "Nama pengguna/Kata laluan salah!"});
        } else {
          const accessToken = createTokens(user)

          //cookie expired after 30days
          res.cookie("access-token", accessToken, { 
            maxAge: 60*60*24*30*1000,
            // to prevent cookies being accessed
            httpOnly: true
          })
          res.send(accessToken);
        }
      })

      //amogh

      // if (user) {
      //   const user_id = user.id;
        
      //   const correctPassword = await bcrypt.compare(req.body.password, user.password);

      //   if (!correctPassword) throw new Error("Nama pengguna/Kata laluan salah!");

      // var token = jwt.sign({user_id}, SECRET);
      // res.send({message: "Berjaya log masuk, token:", token})

      // } else {
      //   throw new Error("Pengguna tidak wujud");
      // }
  } catch (err) {
    res.status(400).send(err);
  }
});

//profile
router.get("/profile", validateToken, (req, res) => {
  res.send("profile");
});
module.exports = router;

/* CREATE TABLE owner_menu(item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,item VARCHAR(250),price VARCHAR(250),owner_id INT,FOREIGN KEY (owner_id)REFERENCES owner(id)); */
