var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const { validateToken } = require('./JWT');

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
  db(`SELECT * FROM item INNER JOIN menu ON menu.menu_id=item.menu_id INNER JOIN owner ON menu.owner_id=owner.owner_id WHERE menu.menu_id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch(err => res.status(404).send("menu not found"));
})

// INSERT a new menu
router.post("/", validateToken, async (req, res) => {
  console.log("posting menu")
  await db(
    `INSERT INTO menu (menu_name, owner_id) VALUES ("${req.body.menu_name}",${req.body.owner_id});`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
});


// DELETE a menu
router.delete("/:id", validateToken, async (req, res) => {
  await db(`DELETE FROM menu WHERE menu_id=${req.params.id};`)
    .then(() => {
      getAllMenu(req, res);
    })
    .catch(err => res.status(404).send(err));
});

module.exports = router;
