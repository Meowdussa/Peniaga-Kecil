import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
import './Additem.css';

function Additem(props) {
  let [input, setInput] = useState({});
  let [error, setError] = useState(null);
  let [item, setItem] = useState([]);
  let [imageLoad, setImageLoad] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  // const uploadImage = async (e) => {
	//   const imageblob=e.target.files[0];
	//   const base64 = await convertBase64(imageblob);
	//   setImageLoad(base64);
  // }

  // const convertBase64 = (imageblob) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(imageblob);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

	//   fileReader.onerror = (error) => {
	// 	  reject(error);
	//   }
  //   });
  // };

  const addItem = () => {
    axios
      .post(`http://localhost:5000/itemapi`, input)
      .then((response) => {
        console.log(response);
        setInput(response);
        //console.log("Item added");
      })
      .catch((error) => {
        setError("Error in adding new item");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
    //setInput({ name: "", phone: "", birthday: ""}); // if you want empty input box after submit
  };

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    axios
      .get("http://localhost:5000/itemapi", item)
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
      })
      .catch(function (error) {
        console.log("Error getting item");
      });
  };

  return props.trigger ? (
    <Box>
      <div>
        <Paper>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <button
                className="close-button"
                onClick={() => props.setTrigger(false)}
              >
                X
              </button>
            </div>
            <div>
              <input
                label="choose photo"
                type="file"
                name="item_image"
                accept="image/*"
                multiple={true}
                // onChange={(e) => uploadImage(e)}
              /><img src={imageLoad} height="250vh" width="250vw"/>
            </div>
            <div>
              <TextField
                label="item"
                id="item"
                name="item_name"
                sx={{ m: 1, width: "25ch" }}
                type="text"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <OutlinedInput
                id="outlined-adornment"
                // value={values.price}
                type="text"
                name="item_price"
                onChange={(e) => handleChange(e)}
                endAdornment={
                  <InputAdornment position="end">RM</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "price",
                }}
              />
            </div>
            <div>
              <button onClick={console.log("im clicked")} type="submit">
                Submit
              </button>
            </div>
          </form>
        </Paper>
      </div>
    </Box>
  ) : (
    ""
  );
}

export default Additem;