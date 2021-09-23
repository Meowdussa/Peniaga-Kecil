var express = require('express');
var router = express.Router();
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const { appendFile } = require('fs');
const app = express();


const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    console.log(file)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer ({storage: storage}) //where to store image

app.get("/upload",(res,req)=>{
  res.send('uploaded')
})

app.post('/upload', upload.single('image'),(req,res)=>{
  res.send('image uploaded')
});

module.exports = router;

//app.post("/api/image", upload.single('image'),(req, res, err) => {