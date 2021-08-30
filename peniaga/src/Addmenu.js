import React, {  useState } from "react";
let axios = require("axios");

function Addmenu() {
let [menu, setMenu] = useState([]);
let [input, setInput] = useState({});
let [error, setError] = useState(null);
let [menuButton, setMenuButton] =  useState(false);


    const addMenu = () => {
       axios.post(`http://localhost:5000/owner/:
       `,input)
       .then((response) =>{
           setInput(response.data);
           console.log("Menu added")
       })
       .catch(error=>{
        setError("Error in adding new menu")
       })
    }

const handleAddMenu = event =>{
    event.preventDefault();
    addMenu();
   /*  setInput({
        item: "",
        price: ""
    }); */
};

/* const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });};
 */

   
    return (
        <div>
           <form>
           
            <label/>Menu List<label/><br/>
            <input placeholder="item" name="Menu"/>
            <input placeholder ="price" name="price"/>

            <button
            onClick={(e)=>{e.preventDefault(); setMenuButton(true); return false}}              
            >Add menu</button>
            <button onClick={(e)=> handleAddMenu(e)}>Submit</button>
           </form> 
           
        </div>
    )
}

export default Addmenu;
