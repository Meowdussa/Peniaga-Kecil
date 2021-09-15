import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "../components/Registerform.css";
let axios = require("axios");

function Registerform() {
  const {register,handleSubmit,watch,formState: { errors },} =useForm();
const [input,setInput] = useState({});
const [owner, setOwner] = useState([]);
let [error, setError] = useState(null);
  const addOwner = () => {
    axios
      .post(`http://localhost:5000/ownerapi`, input)
      .then((response) => {
        console.log(response.data);
        setInput(response.data);
        console.log("Shop added");
      })
      .catch((error) => {
        setError("Error in adding new shop");
      });
  };


  useEffect(() => {
    axios.get(`http://localhost:5000/ownerapi`).then((response) => {
      setOwner(response.data);
      setInput(response.data);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    addOwner();
  }; // your form submit function which will invoke after successful validation

  
  return (
    <form onSubmit={(e) => addOwner(e)}>
         
       <label>User Name</label>
      <input {...register("username", { min: 18, max: 99 })} />
      {errors?.username?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Password</label>
      <input {...register("password", { min: 5, max: 10 },{ pattern: /^[A-Za-z]+$/i })} />
      {errors?.password?.type === "required" && <p>This field is required</p>}
      {errors?.password?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Shop Name</label>
      <input {...register("shop_name", { min: 10, max: 20 })} />
      {errors?.shop_name?.type === "required" && <p>This field is required</p>}
      {errors?.type === "pattern" && (
        <p>Must choose a shop name</p>
      )}
       <label>Phone Number</label>
      <input {...register("phonenumber", { min: 10, max: 12 })} />
      {errors?.shop_name?.type === "required" && <p>This field is required</p>}
      {errors?.type === "pattern" && (
        <p>Must be a valid phone number</p>
      )}
      <label>Address</label>
      <textarea {...register("address", { min: 250, max: 250 })} />
      {errors?.address?.type === "required" && <p>This field is required</p>}
      {errors?.type === "pattern" && (
        <p>Full address including postcode</p>
      )}
      <input type="submit"/>
    </form>
  );
}

/* const rootElement = document.getElementById("root");
ReactDOM.render(<Registerform />, rootElement); */
export default Registerform;
