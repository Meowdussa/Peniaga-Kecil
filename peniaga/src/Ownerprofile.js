import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState, useEffect } from "react";
import axios from "axios";
import Additem from './components/Additem';
import SaveIcon from '@mui/icons-material/Save';
import Header from './components/Header';


function Ownerprofile() {
    const [input,setInput] = useState({});
    let [menuerror, setMenuerror] = useState(null);
    const [item, setItem]= useState(false);
    const [menu, setMenu] = useState(false);
    
const addMenu = ()=> {
    axios
        .post(`http://localhost:5000/menuapi`,input)
        .then((response)=>{
            console.log("Menu added",response);
            setInput(response);
        })
        .catch((error)=>{
            setMenuerror("Error in adding new menu")
        })
}

const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };


  const handleSubmit = event => {
    event.preventDefault();
    addMenu();
    //setInput({ name: "", phone: "", birthday: ""}); // if you want empty input box after submit
  };
   
    return (
			<div>
				<Box>
					<Box>
                        <Header/>
					</Box>
					<Box>
						<Paper>
							<input type="text" id="menutitle" placeholder="Masukkan tajuk menu" name="menu_name"/>
                            <SaveIcon onClick={()=>addMenu(true)}/>
						</Paper>
					</Box>
					<Box>
						<Paper>
							<span>
								<button onClick={() => setItem(true)}>Tambah</button>
							</span>
							<Additem trigger={item} setTrigger={setItem}></Additem>
						</Paper>
					</Box>
				</Box>
			</div>
		);
}

export default Ownerprofile


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