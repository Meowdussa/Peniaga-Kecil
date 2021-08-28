import React, { useState, useEffect } from "react";
import AddMenu from "./Addmenu";
//import UserView from "./UserView";
let axios = require("axios");


const Owner = () => {
    let [owner,setOwner] = useState([]);
    let [input, setInput] = useState({}); //the state of input box
    let [error, setError] = useState(null);

//const url = "http://localhost:5000/owner";

const addOwner = () => {
    
    axios.post(`http://localhost:5000/owner`,input)    
    .then((response) =>{
        console.log(response.data);
        setInput(response.data);
        console.log("Shop added")
    })
    .catch(error=>{
        setError("Error in adding new shop")
    })    
};


useEffect(()=>{
    axios.get(`http://localhost:5000/`)
    .then((response)=>{
        setInput(response.data);
    });
},[]);



const handleAddOwner = event => {
    event.preventDefault();
    addOwner();
  };

 
const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value }); //to handle the changes in input box

};
  




/* const buttonLoop = () =>{

} */



/*  const handleOnSubmit = event =>{ //want to return to home page
    event.preventDefault();
    return <UserView/>
 }; */


    return (
        <div>
            <form>
            <div>
            <label/>Shop Name<label/>
            <input 
            onChange={e=>handleChange(e)}
            /* value={input.shop_name} */ 
            type="text"
            name="shop_name"/>
            
            </div>

            <div>
            <label/>Address<label/>
            <input 
            onChange={e=>handleChange(e)}
            /* value={input.address}  */
            type="text"
            name="address"/><br/>
            </div>        
            </form>
            <button
            onClick={e=>handleAddOwner(e)}
            >Submit</button>

            {/* <div>
                <button onSubmit={e=>handleOnSubmit(e)}>Return Home</button>
            </div> */}
            <AddMenu/>
        </div>
            

        
    )
}

export default Owner;
