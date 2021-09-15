import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "../components/Registerform.css";
//let axios = require("axios");
import axios from "axios";

function Registerform() {
const {register,handleSubmit,watch, formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },} =useForm();
const [input,setInput] = useState({});
const [owner, setOwner] = useState([]);
let [error, setError] = useState(null);
  const addOwner = (data) => {
   console.log("printing input",data);
    axios
      .post(`http://localhost:5000/ownerapi`, data)
      .then((response) => {
        
        console.log(response.data);
        console.log("Shop added");
      })
      .catch((error) => {
        setError("Error in adding new shop");
      });
  };


/*   useEffect(() => {
    axios.get(`http://localhost:5000/ownerapi`).then((response) => {
      setOwner(response.data);
    });
  }, []); */

  const onSubmit = (event) => {
    //event.preventDefault();
    console.log(JSON.stringify(event));
    //setInput(event)
    addOwner(event);
  }; // your form submit function which will invoke after successful validation

/* 
  const handleChange = (e) => {
    console.log({[e.target.name]: e.target.value })
    setInput({ ...input, [e.target.name]: e.target.value }); //to handle the changes in input box
  }; */

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
         
       <label>Username</label>
      <input {...register("username", {
          required: true,
          maxLength: 15,
        })}
      />
      {errors?.username?.type === "required" && <p>This field is required</p>}
      {errors?.username?.type === "maxLength" && (
        <p>Username cannot exceed 15 characters</p>
      )}
     {/*  <input type="text" name="username" onChange={(e) => handleChange(e)}/> */}
      <label>Password</label>
      <input {...register("password", {
          required: true,
          maxLength: 15,
        })}/>
      {errors?.password?.type === "required" && <p>This field is required</p>}
       {errors?.password?.type === "maxLength" && (
        <p>Password cannot exceed 15 characters</p>
      )}
      <label>Shop Name</label>
      <input 
      {...register("shop_name", {
        required: true,
        maxLength: 15,
        })} />
      {errors?.shop_name?.type === "required" && <p>This field is required</p>}
       <label>Phone Number</label>
      <input 
      {...register("phone", {required: true, maxLength:12})} />
      {errors?.phone?.type === "required" && <p>This field is required</p>}
      {errors?.phone?.type === "maxLength" && (
        <p>Phone number cannot exceed 12 characters</p>
      )}
      <label>City</label>
      <input 
      {...register("city", { required: true})} />
      {errors?.city?.type === "required" && <p>This field is required</p>}
      <label>Address</label>
      <textarea 
      {...register("address", { required: true})} />
      {errors?.address?.type === "required" && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Registerform />, rootElement); */
export default Registerform;
