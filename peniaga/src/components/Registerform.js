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
const [regStatus, setRegStatus] = useState("");

  const addOwner = (data) => {
   console.log("printing input",data);
    axios
      .post(`http://localhost:5000/ownerapi`, data)
      .then((response) => {
        setRegStatus(response.data.message);
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
       <h1>Daftar</h1>
       <label>Nama Pengguna</label>
      <input {...register("username", {
          required: true,
          maxLength: 15,
        })}
      />
      {errors?.username?.type === "required" && <p>Sila isikan maklumat</p>}
      {errors?.username?.type === "maxLength" && (
        <p>Nama pengguna tidak boleh melebihi 15 aksara</p>
      )}
     {/*  <input type="text" name="username" onChange={(e) => handleChange(e)}/> */}
      <label>Kata Laluan</label>
      <input {...register("password", {
          required: true,
          maxLength: 15,
        })}/>
      {errors?.password?.type === "required" && <p>Sila isikan maklumat</p>}
       {errors?.password?.type === "maxLength" && (
        <p>Kata laluan tidak boleh melebihi 15 aksara</p>
      )}
      <label>Nama Kedai</label>
      <input 
      {...register("shop_name", {
        required: true,
        maxLength: 15,
        })} />
      {errors?.shop_name?.type === "required" && <p>Sila isikan maklumat</p>}
       <label>Nombor Telefon</label>
      <input 
      {...register("phone", {required: true, maxLength:12})} />
      {errors?.phone?.type === "required" && <p>Sila isikan maklumat</p>}
      {errors?.phone?.type === "maxLength" && (
        <p>Nombor telefon tidak boleh melebihi 12 aksara</p>
      )}
      <label>Bandar</label>
      <input 
      {...register("city", { required: true})} />
      {errors?.city?.type === "required" && <p>Sila isikan maklumat</p>}
      <label>Alamat</label>
      <textarea 
      {...register("address", { required: true})} />
      {errors?.address?.type === "required" && <p>Sila isikan maklumat</p>}
      <input type="submit" />
      <h1>{regStatus}</h1>
    </form>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Registerform />, rootElement); */
export default Registerform;
