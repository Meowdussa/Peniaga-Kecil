import React, {  useState } from "react";
let axios = require("axios");

function Addmenu(props) {
let [menu, setMenu] = useState([]);
let [input, setInput] = useState({});
let [error, setError] = useState(null);
let [menuButton, setMenuButton] =  useState(false);


    const addMenu = (ownerID) => {
        console.log(input,"in the front end");
       axios.post(`http://localhost:5000/owner/${ownerID}
       `,input)
       .then((response) =>{
           console.log(response.data)//only showing shops, not menu added
           setMenu(response.data);
           console.log("Menu added")
       })
       .catch(error=>{
        setError("Error in adding new menu")
       })
      
    }
//
const handleAddMenu = (event,ownerID) =>{
    event.preventDefault();
    addMenu(ownerID);
     setInput({
        item: "",
        price: ""
    }); 
};

const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });};


    return (
        <div>
           <form>
            <label/>Menu List<label/><br/>
            <span>{props.ownerDetails.shop_name} </span>
            <input onChange={(e)=>handleChange(e)} placeholder="item" name="item" value={input.item}/>
            <input onChange={(e)=>handleChange(e)} placeholder ="price" name="price" value={input.price}/>
            <button
            onClick={(e)=>{e.preventDefault(); setMenuButton(true); return false}}              
            >Add menu</button>
            <button onClick={(e)=> handleAddMenu(e,props.ownerDetails.id)}>Submit</button>
           </form> 
           
        </div>
    )
}

export default Addmenu;
