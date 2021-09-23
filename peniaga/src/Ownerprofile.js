import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState, useEffect } from "react";
import axios from "axios";
import Additem from "./components/Additem";
import SaveIcon from "@mui/icons-material/Save";
import Button from '@mui/material/Button';
import './Ownerprofile.css'

function Ownerprofile() {
  const [input, setInput] = useState({});
  let [menuerror, setMenuerror] = useState(null);
  const [item, setItem] = useState(false);
  const addMenu = (data) => {
    axios
      .post(`http://localhost:5000/menuapi`, data)
      .then((response) => {
        console.log("Menu added");
      })
      .catch((error) => {
        setMenuerror("Error in adding new menu");
      });
  };

  const logout = () => {
      sessionStorage.clear();
      console.log("LOGGED OUT")
  }
  /* let isShow = ()=>{
    console.log("Add item is click");
    <Additem/>
} */

  /*  const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      }; */ //for material ui

  /*  return (props.trigger) ? (
        <div className="popup">
           <div className="inner-popup">
                <button className="close-button" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
                <span className="setting-txt"><h5>TIMER SETTING </h5></span>
            </div>
            <div>
                
            </div>

        </div>
        ) : ""; */
  return (
    <div>
      <Box>
        <Box>
          <Paper height="200px">
            <h4>Choose header photo</h4>
            <input
              label="choose photo"
              type="file"
              name="headerimg"
              accept="image/*"
              multiple={false}
            />
          </Paper>
        </Box>
        <Box>
          <Paper>
            <input
              type="text"
              id="menutitle"
              placeholder="masukkan tajuk menu"
            />
            <SaveIcon />
          </Paper>
        </Box>
        <Box>
          <Paper>
            <span>
              <button onClick={() => setItem(true)}>Add Item</button>
            </span>
            <Additem trigger={item} setTrigger={setItem}></Additem>
          </Paper>
        </Box>
      </Box>
      <div className="logout-btn">
      <Button id="logout-btn" variant="contained" onClick={logout}>LOG KELUAR</Button>
      </div>
    </div>
  );
}

export default Ownerprofile;

//<input type="file" name="image" accept="image/*" multiple={true}/>
