import React, {  useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from "axios";


function Additem(props) {
	let [itemerror, setItemerror] = useState(null);
	let [menu, setMenu] = useState([]);
	let [input, setInput] = useState({});
	let [error, setError] = useState(null);

	/* const addMenu = (ownerID) => {
		console.log(input, "in the front end");
		axios
			.post(
				`http://localhost:5000/owner/${ownerID}
       `,
				input
			)
			.then((response) => {
				console.log(response.data); //only showing shops, not menu added
				setMenu(response.data);
				console.log("Menu added");
			})
			.catch((error) => {
				setError("Error in adding new menu");
			});
	}; */
	//
	/* const handleAddMenu = (event, ownerID) => {
		event.preventDefault();
		addMenu(ownerID);
		setInput({
			item: "",
			price: "",
		});
	}; */

/* 	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	}; */

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };

	const handleChange = (event) => {
		const value = event.target.value;
		setInput({ ...input, [event.target.name]: value });
	  };

	const addItem = () => {
		axios
			.post(`http://localhost:5000/itemapi`,input )
			.then((response) => {
                console.log(response)
				setInput(response);
				//console.log("Item added");
			})
			.catch((error) => {
				setError("Error in adding new item");
			});
	};

    // const onSubmit = (event) => {
    //     //console.log(JSON.stringify(event));
    //     addItem(event);
    //   };

      const handleSubmit = event => {
        event.preventDefault();
        addItem();
        //setInput({ name: "", phone: "", birthday: ""}); // if you want empty input box after submit
      };

	return props.trigger ? (
		<Box>
			<div>
				<Paper >
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
							onChange={(e) => handleChange(e)}
						/>
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
							endAdornment={<InputAdornment position="end">RM</InputAdornment>}
							aria-describedby="outlined-weight-helper-text"
							inputProps={{
								"aria-label": "price",
							}}
						/>
					</div>
					<div>
						<button 
                        onClick={console.log('im clicked')}
                        type="submit">Submit</button>
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




	{/*  <form>
            <label/>Menu List<label/><br/>
            <span>{props.ownerDetails.shop_name} </span>
            <input onChange={(e)=>handleChange(e)} placeholder="item" name="item" value={input.item}/>
            <input onChange={(e)=>handleChange(e)} placeholder ="price" name="price" value={input.price}/>
            <button
            onClick={(e)=>{e.preventDefault(); setMenuButton(true); return false}}              
            >Add menu</button>
            <button onClick={(e)=> handleAddMenu(e,props.ownerDetails.id)}>Submit</button>
           </form>  */}