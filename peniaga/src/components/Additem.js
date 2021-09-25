import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import axios from "axios";
import "./Additem.css";

const ariaLabel = { "aria-label": "description" };

function Additem(props) {
  let [input, setInput] = useState({});
  let [error, setError] = useState(null);
  let [item, setItem] = useState([]);
  // let [imageLoad, setImageLoad] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  // const uploadImage = async (e) => {
  //   const imageblob = e.target.files[0];
  //   const base64 = await convertBase64(imageblob);
  //   setImageLoad(base64);
  // };

  // const convertBase64 = (imageblob) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(imageblob);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const addItem = () => {
    axios
      .post(
        `http://localhost:5000/itemapi`,
        { input },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
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
    setInput({ item_name: "", item_price: "" }); // if you want empty input box after submit
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
              <CancelPresentationIcon
                className="close-button"
                onClick={() => props.setTrigger(false)}
              />
            </div>
            <div className="item-content">
              <img id="item-img" src="https://fakeimg.pl/200x200" />
              <div>
                <input
                  id="item-input"
                  label="choose photo"
                  type="file"
                  name="item_image"
                  accept="image/*"
                  multiple={true}
                  // onChange={(e) => uploadImage(e)}
                />
              </div>
              <div className="item-text">
                <div>
                <Input
                  placeholder="Makanan"
                  name="item_name"
                  type="text"
                  inputProps={ariaLabel}
                  onChange={(e) => handleChange(e)}
                />
                </div>
                <OutlinedInput
                  id="outlined-adornment"
                  type="text"
                  name="item_price"
                  style={{ width: "8vw", height: "5vh" }}
                  onChange={(e) => handleChange(e)}
                  startAdornment={
                    <InputAdornment position="start">RM</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "price",
                  }}
                />
              </div>
                <Button id="item-btn" type="submit">SIMPAN
                </Button>
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
