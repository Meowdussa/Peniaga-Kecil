import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState, useContext } from "react";
import axios from "axios";
import Additem from "./components/Additem";
import Button from '@mui/material/Button';
import './Ownerprofile.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from "react-router-dom";
import {AuthContext} from "./authentication/Authcontext"



function Ownerprofile() {
  const [input, setInput] = useState({});
  let [menuerror, setMenuerror] = useState(null);
  const [item, setItem] = useState(false);
  const {setAuthState} = useContext(AuthContext)

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

  let history = useHistory();

  const logout = () => {
      localStorage.clear();
      setAuthState(false);
      history.push("/logmasuk");
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
        <Box id="header">
          <Paper id="header-content" >
            <h4>Selamat datang ke halaman anda!</h4>
            <div className="highlight">
            <a>Mulakan dengan memuat naik foto kedai anda</a>
            </div>
            <img id="header-img" src="https://fakeimg.pl/600x400"/>
            <input
              id="header-input"
              label="choose photo"
              type="file"
              name="headerimg"
              accept="image/*"
              multiple={false}
            />
            <Button id="upload-btn" type="submit">SIMPAN</Button>
            <div className="highlight">
            <a>Perkenalkan kedai anda</a>
            </div>
            <textarea id="shop-desc" type="text" name="description" placeholder="Selamat datang ke kedai kami! Kami menawarkan pelbagai jenis makanan..."></textarea>
            <Button id="upload-btn" type="submit">SIMPAN</Button>
            <div className="highlight">
            <a>Senaraikan hidangan yang ditawarkan</a>
            </div>
            <div className="item-buttons">
            <table className="table table-hover">
          <thead>
            <tr className="table-auto">
              <th style={{ width: "30vw" }}>Nama hidangan</th>
              <th style={{ width: "10vw" }}>Harga (RM)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {events.map((e) => ( */}
              <tr>
                <td>{/*{e.date}*/}</td>
                <td>{/*{e.title}*/}</td>
                <td className="del-btn" style={{ width: "1%" }} /*onClick={()=>deleteEvent(e.id)}*/>&times;</td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
            <span>
              <button onClick={() => setItem(true)}>TAMBAH SENARAI</button>
            </span>
            <Additem trigger={item} setTrigger={setItem}></Additem>
            </div>
          </Paper>
        </Box>
        <Box>
            {/* <div className="item-buttons">
            <span>
              <button onClick={() => setItem(true)}>TAMBAH MAKANAN</button>
            </span>
            <Additem trigger={item} setTrigger={setItem}></Additem>
            </div> */}
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

        /* let isShow = ()=>{
    console.log("Add item is click");
    <Additem/>
} */

{/* <Paper height="300px" width="300px">
                        <h4>Pilih gambar</h4>
                        <input
							label="choose photo"
							type="file"
							name="headerimg"
							accept="image/*"
							multiple={false}
						/>
						</Paper> */}