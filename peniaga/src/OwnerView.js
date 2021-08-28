import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useState, useEffect } from "react";
import AddMenu from "./Addmenu";
//import UserView from "./UserView";
let axios = require("axios");


const Owner = () => {

    let [owner,setOwner] = useState([]); 
    let [input, setInput] = useState({}); //the state of input box
    let [error, setError] = useState(null);

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

            type="text"
            name="address"/><br/>
            </div>        
            
            <button
            onClick={e=>handleAddOwner(e)}
            >Submit</button>   

            <div>
                <Grid container>
                    <Grid>
                        <Paper></Paper>
                    </Grid>
                </Grid>
                {owner.map(param=>(
                    <div key={param.id}>
                       
                        <div>
                        <p>{`Shop name :${param.shop_name}`}</p>
                        <p>{`Address:${param.address}`}</p>
                       </div>  
                    <AddMenu ownerDetails={param}/>
                   
                    </div>
                ))}
            </div>  


            </form>
        </div>

    )
}

export default Owner;
