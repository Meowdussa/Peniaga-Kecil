import { response } from "express";
import React, { useState, useEffect } from "react";
import AddMenu from "./Addmenu";
//import UserView from "./UserView";
let axios = require("axios");


const Owner = () => {
    let [owner,setOwner] = useState({});
    let [input, setInput] = useState({}); //the state of input box
    let [error, setError] = useState(null);


const addOwner = () => {
    
    axios.post(`http://localhost:5000/owner`,input)    
    .then((response) =>{
        console.log(response.data);
        setOwner(response.data);
        console.log("Shop added")
    })
    .catch(error=>{
        setError("Error in adding new shop")
    })    
};

//getOwner

const getOwner = () => {
    axios
        .get(`http://localhost:5000/`,owner)
        .then(response =>{
            setOwner(response.data);
        })
        .catch(function(error){
            console.log("Error adding students")
        })
}

useEffect(()=>{
    axios.get(`http://localhost:5000/`)
    .then((response)=>{
        setOwner(response.data);
    });
},[]);



const handleAddOwner = event => {
    event.preventDefault();
    addOwner();   
    
  };

 
const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value }); //to handle the changes in input box

};
  

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
            
            type="text"
            name="shop_name"/>
            
            </div>

            <div>
            <label/>Address<label/>
            <input 
            onChange={e=>handleChange(e)}
            type="text"
            name="address"/><br/>
            </div>        
            
            <button
            onClick={e=>handleAddOwner(e)}
            >Submit</button>   

            {/* <div>
                {owner.map(param=>(
                    <div key={param.id}>
                        return (
                        <h1>{`Shop name :${shop_name}`}</h1>
                        <h3>{`Address:${address}`}</h3>
                        )                        
                    </div>
                ))}
            </div> */}      
            <AddMenu/>

            </form>
        </div>
    )
}

export default Owner;
