var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const {validateToken} = require('./JWT');

/* GET item listing. */
router.get('/', function(req, res, next) {
    db("SELECT * FROM item;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
  });
  
  const getAllItems = (req, res) => {
    db("SELECT * FROM item;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
  };
  
  // GET one item
  router.get("/:id", function(req, res){
    db(`SELECT * FROM item where id=${req.params.item_id};`)
      .then((results) => {
        res.send(results.data);
      })
      .catch(err => res.status(404).send("item not found"));
  })
  
//   INSERT an item
  // router.post("/", async (req, res) => {
  //   try {
  //     await db(
  //     `INSERT INTO item (item_image, item_name,item_price, menu_id) VALUES ("${req.body.item_image}","${req.body.item_name}", "${req.body.item_price}", 2);`
  //   )
  //     .then((results) => {
  //       res.send(results.data);
  //     })
  //   }
  //     catch (err) {res.status(500).send(err)};
  // });

  // Test insert item
  router.post("/", validateToken, (req, res) => {
    const owner_id = req.user.owner_id;
    db(`INSERT INTO item (owner_id, item_name, item_price, item_image) VALUES ("${owner_id}","${req.body.item_name}", "${req.body.item_price}", "${req.body.item_image}");`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});
  
  // DELETE an item
  router.delete("/:id", function(req, res, next) {
    db(`DELETE FROM item WHERE id=${req.params.item_id};`)
      .then(() => {
        getAllMenu(req, res);
      })
      .catch(err => res.status(404).send("unable to remove item"));
  });

module.exports = router;