var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const {createTokens,validateToken} = require('./JWT');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })





//app.post("/api/image", upload.single('image'),(req, res, err) => {