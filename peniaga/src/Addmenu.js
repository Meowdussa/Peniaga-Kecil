import React, {  useState } from "react";
let axios = require("axios");

function Addmenu() {
let [menu, setMenu] = useState([]);
let [input, setInput] = useState({});
let [error, setError] = useState(null);
let [menuButton, setMenuButton] =  useState(false);


    const addMenu = () => {
        axios({
            method:"post",
            url: `/owner/${id}`,
            body: {
                item: "",
                price: ""
            },
        })
        .then(response =>{
            console.log(response);
        })
            .catch(error =>{
                setError("Error in adding menu");
            })
    }

const handleAddMenu = event =>{
    event.preventDefault();
    addMenu();
    setInput({
        item: "",
        price: ""
    });
};

/* const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });};
 */



    
    return (
        <div>
           <form>
           
            <label/>Menu List<label/><br/>
            {(menuButton === true)? 
            for(let i=0; i<15; i++){
             <div>{i}
            <input placeholder="item" name="Menu"/>
            <input placeholder ="price" name="price"/>
            </div>
            }
            : 
            <div/> 
        
            <button
            onClick={(e)=>{e.preventDefault(); setMenuButton(true); return false}}              
            >Add menu</button>
            <button onClick={(e)=> handleAddMenu(e)}>Submit</button>
           </form> 
           
        </div>
    )
}

export default Addmenu;
