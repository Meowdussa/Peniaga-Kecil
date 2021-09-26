import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import axios from "axios";
import "./Additem.css";

const ariaLabel = { "aria-label": "description" };

function Additem(props) {
  // const [input, setInput] = useState({});
  const [error, setError] = useState(null);
  const [item, setItem] = useState([]);
  const [imageSelected, setImageSelected] = useState("");

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setInput({ ...input, [event.target.name]: value });
  // };

  //cloudinary does not work with <form>
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "xnxqwn7c");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/sai-project/image/upload",
        formData
      )
      .then((response) => {
        console.log(response);
      });
  };

  // const addItem = () => {
  //   axios
  //     .post(
  //       `http://localhost:5000/itemapi`,
  //       { input },
  //       {
  //         headers: {
  //           accessToken: localStorage.getItem("accessToken"),
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       setInput(response);
  //       //console.log("Item added");
  //     })
  //     .catch((error) => {
  //       setError("Error in adding new item");
  //     });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addItem();
  //   setInput({ item_name: "", item_price: "" }); // if you want empty input box after submit
  // };

  // useEffect(() => {
  //   getItem();
  // }, []);

  // const getItem = () => {
  //   axios
  //     .get("http://localhost:5000/itemapi", item)
  //     .then((response) => {
  //       console.log(response.data);
  //       setItem(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting item");
  //     });
  // };

  return props.trigger ? (
    <Box>
      <div>
        <Paper>
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
                  type="file"
                  name="item_image"
                  // accept="image/*"
                  // multiple={true}
                  onChange={(e) => setImageSelected(e.target.files[0])}
                />
              </div>
              {/* <div className="item-text">
                <div>
                  <Input
                    placeholder="Makanan"
                    name="item_name"
                    type="text"
                    inputProps={ariaLabel}
                    // onChange={(e) => handleChange(e)}
                  />
                </div>
                <OutlinedInput
                  id="outlined-adornment"
                  type="text"
                  name="item_price"
                  style={{ width: "8vw", height: "5vh" }}
                  // onChange={(e) => handleChange(e)}
                  startAdornment={
                    <InputAdornment position="start">RM</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "price",
                  }}
                />
              </div> */}
              <Button id="item-btn" type="submit" onClick={uploadImage}>
                SIMPAN
              </Button>
            </div>
        </Paper>
      </div>
    </Box>
  ) : (
    ""
  );
}

export default Additem;
