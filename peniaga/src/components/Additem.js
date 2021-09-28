import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import axios from "axios";
import "./Additem.css";
import { Image } from "cloudinary-react";

const ariaLabel = { "aria-label": "description" };

function Additem(props) {
  const [input, setInput] = useState({});
  const [error, setError] = useState(null);
  const [item, setItem] = useState([]);
  const [imageSelected, setImageSelected] = useState("");
  const [imageURL, setImageURL] = useState("https://fakeimg.pl/200x200");

  //cloudinary does not work with <form> (only in this file)
  //image uploaded to cloudinary and fetch imageURL here
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
        console.log(response.data);
        console.log(response.data.url);
        setImageURL(response.data.url);
      });
  };

  // useEffect(() => {
  //   getItem();
  // }, []);

  // const getItem = (id) => {
  //   axios
  //     .get(
  //       `http://localhost:5000/itemapi/${id}`,
  //       { item },
  //       {
  //         headers: {
  //           accessToken: localStorage.getItem("accessToken"),
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setItem(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting item");
  //     });
  // };

  // const addItem = () => {
  //   input.item_image = imageURL;
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
  //     .then((data) => {
  //       console.log(data);
  //       setItem(data);
  //       //console.log("Item added");
  //     })
  //     .catch((error) => {
  //       setError("Error in adding new item");
  //     });
  // };

  const addItem = () => {
    input.item_image = imageURL;
    fetch("/itemapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
    // setInput({ item_name: "", item_price: "", item_image: "" }); // if you want empty input box after submit
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

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
            <Image id="item-img" cloudName="sai-project" publicId={imageURL} />
            <div className="cloud-upload">
              <input
                id="item-input"
                type="file"
                onChange={(e) => setImageSelected(e.target.files[0])}
              />
              <Button id="item-btn" type="submit" onClick={uploadImage}>
                <SaveAltIcon />
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                Image URL
                <input
                  type="text"
                  name="item_image"
                  value={imageURL}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="item-text">
                <div>
                  <Input
                    placeholder="Nama hidangan"
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
                  style={{ width: "10vw", height: "5vh" }}
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
              <Button id="item-btn" type="submit">
                HANTAR
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    </Box>
  ) : (
    ""
  );
}

export default Additem;
