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
  router.post("/", function(req, res) {
    db(
      `INSERT INTO item (item_name,item_notes,item_price, owner_id) VALUES ("${req.body.item_name}","${req.body.item_notes}", "${req.body.item_price}",38);`

    )
      .then((results) => {
        res.send(results.data);
      })
    }
      catch (err) {res.status(500).send(err)};
  });
  
  
  // DELETE an item
  router.delete("/:id", function(req, res, next) {
    db(`DELETE FROM item WHERE item_id=${req.params.id};`)
      .then(() => {
        getAllItems(req, res);
      })
      .catch(err => res.status(404).send("unable to remove item"));
  });

module.exports = router;