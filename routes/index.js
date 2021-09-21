var express = require('express');
var router = express.Router();
const multer = require('multer');
const cors = require('cors')

/* GET home page. */
router.get("/", (req, res) => {
  res.send("Welcome to API.../ownerapi .../menuapi .../itemapi");
});









module.exports = router;
