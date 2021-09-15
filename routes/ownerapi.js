var express = require("express");
var router = express.Router();
const db = require("../model/helper");

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
router.get("/:id", function (req, res, next) {
	db(`SELECT shop_name,address FROM owner WHERE id=${req.params.owner_id};`)
		.then((results) => {
			allOwners(req, res);
			// res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

// get city
router.get("/:id", function (req, res, next) {
	db(`SELECT city FROM owner WHERE id=${req.params.owner_id};`)
		.then((results) => {
			allOwners(req, res);
			//res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

//get one shop menu KIV
router.get("/menu/:id", function (req, res, next) {
	db(
		`SELECT owner.id,item_id,owner_menu.item,owner_menu.price FROM owner_menu INNER JOIN owner ON owner.id=owner_menu.owner_id WHERE owner.id=${req.params.id};`
	)
		.then((results) => {
			res.send(results.data);
			//creat a func allfooditems inside it send the  id, the req, and res
			//allfooditems give all that matched the owner id
		})
		.catch((err) => res.status(500).send(err));
});

// insert a new shop 1st step -
router.post("/", function (req, res, next) {
	console.log(req.body);

	db(
		`INSERT INTO owner(username, password, shop_name, phone, address, city) VALUES ("${req.body.username}","${req.body.password}","${req.body.shop_name}","${req.body.phone}","${req.body.address}","${req.body.city}")`
	)
		.then((results) => {
			//add menu items //helper func to add menu

			allOwners(req, res);
		})
		.catch((err) => res.status(404).send(err));
});

//insert menu KIV
router.post("/owner/:id", function (req, res, next) {
	//console.log(`${req.input.item},${req.input.price}`, "in the api")
	db(
		`INSERT INTO owner_menu(item,price,owner_id)VALUES('${req.body.item}','${req.body.price}',${req.params.id})`
	)
		.then((results) => {
			allOwners(req, res);
		})
		.catch((err) => res.status(404).send(err));
});

//delete menu helper func KIV
const deleteOne = (owner_id, req, res, next) => {
	db(`DELETE FROM owner_menu WHERE owner_id=${owner_id}`)
		.then((results) => {
			res.send(results.data);
			res.send("Delete succesful");
		})
		.catch((err) => res.status(500).send(err));
};

//delete a shop
router.delete("/:id", function (req, res, next) {
	deleteOne(req.params.id);
	db(`DELETE FROM owner WHERE id=${req.params.owner_id}`)
		.then((results) => {
			res.send(results.data);
			res.send("Delete succesful");
		})
		.catch((err) => res.status(500).send(err));
});
module.exports = router;

/* CREATE TABLE owner_menu(item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,item VARCHAR(250),price VARCHAR(250),owner_id INT,FOREIGN KEY (owner_id)REFERENCES owner(id)); */
