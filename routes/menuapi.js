var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET menu listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM menu;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

const getAllMenu = (req, res) => {
  db("SELECT * FROM menu;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
};

// GET one menu
router.get("/:id", function(req, res){
  db(`SELECT * FROM menu where id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch(err => res.status(404).send("menu not found"));
})

// INSERT a new menu
router.post("/", function(req, res) {
  console.log("posting menu")
  db(
    `INSERT INTO menu ( ) VALUES ("${req.body.name}","${req.body.phone}","${req.body.birthday}");`
  )
    .then(() => {
      getAllMenu(req, res);
    })
    .catch(err => res.status(404).send(err));
});


// DELETE a menu
router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM menu WHERE id=${req.params.id};`)
    .then(() => {
      getAllMenu(req, res);
    })
    .catch(err => res.status(404).send(err));
});
module.exports = router;
