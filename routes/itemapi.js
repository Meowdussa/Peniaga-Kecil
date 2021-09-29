var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const {validateToken} = require('./JWT');


/* GET item listing. */
router.get('/', function(req, res, next) {
    db("SELECT * FROM item;") //where owner_id 
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
  router.get("/:id", validateToken, function(req, res){
    const id = req.params.id; 
    //console.log("inserted by owner_id:", req.user.id)
    db(`SELECT * FROM item where owner_id=${req.user.id};`) // get owner based on shop name then compare /join query based on params
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
  router.post("/", validateToken,  (req, res) => {
    console.log("inserted by owner_id:", req.user.id)
    db(`INSERT INTO item (owner_id, item_name, item_price, item_image) VALUES ("${req.user.id}","${req.body.item_name}", "${req.body.item_price}", "${req.body.item_image}");`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

  // Insert hardcode
  // router.post("/", function(req, res) {
  //   db(
  //     `INSERT INTO item (item_name,item_notes,item_price, owner_id) VALUES ("${req.body.item_name}","${req.body.item_notes}", "${req.body.item_price}",38);`

  //   )
  //     .then((results) => {
  //       res.send(results.data);
  //     })
  //     .catch(err => res.status(404).send("item not added")); 
  //    });
  
  
  // DELETE an item
  router.delete("/:id", function(req, res, next) {
    db(`DELETE FROM item WHERE item_id=${req.params.id};`)
      .then(() => {
        getAllItems(req, res);
      })
      .catch(err => res.status(404).send("unable to remove item"));
  });

module.exports = router;