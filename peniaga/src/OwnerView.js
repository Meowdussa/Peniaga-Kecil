import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Container from '@material-ui/core/Container';
import React, { useState, useEffect } from "react";
import AddMenu from "./Addmenu";

import "./OwnerView.css";
//import UserView from "./UserView";
let axios = require("axios");

const Owner = () => {
  let [owner, setOwner] = useState([]);
  let [input, setInput] = useState({}); //the state of input box
  let [error, setError] = useState(null);

  const addOwner = () => {
    axios
      .post(`http://localhost:5000/`, input)
      .then((response) => {
        console.log(response.data);

        setInput(response.data);

        console.log("Shop added");
      })
      .catch((error) => {
        setError("Error in adding new shop");
      });
  };

  //getOwner

  const getOwner = () => {
    axios
      .get(`http://localhost:5000/ownerapi`, owner)
      .then((response) => {
        setOwner(response.data);
      })
      .catch(function (error) {
        console.log("Error getting shop");
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/ownerapi`).then((response) => {
      setOwner(response.data);

      setInput(response.data);
    });
  }, []);

  const handleAddOwner = (event) => {
    event.preventDefault();
    addOwner();
    getOwner();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); //to handle the changes in input box
  };

  /*  const handleOnSubmit = event =>{ //want to return to home page
    event.preventDefault();
    return <UserView/>
 }; */

  // delete a shop
  const deleteOwner = (id) => {
    axios
      .delete(`http://localhost:5000/ownerapi/${id}`, input)
      .then((response) => {
        console.log(response.data);

        setInput(response.data);

        console.log("Shop deleted");
      })
      .catch((error) => {
        setError("Error in deleting this shop");
      });
  };

  return (
    <div>
    
    </div>
  );
};

export default Owner;
