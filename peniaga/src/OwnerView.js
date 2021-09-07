import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Container from '@material-ui/core/Container';
import React, { useState, useEffect } from "react";
import AddMenu from "./Addmenu";
import Location from "./components/Location";
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
      .get(`http://localhost:5000/`, owner)
      .then((response) => {
        setOwner(response.data);
      })
      .catch(function (error) {
        console.log("Error getting shop");
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/`).then((response) => {
      setOwner(response.data);

      setInput(response.data);
    });
  }, []);

  const handleAddOwner = (event) => {
    event.preventDefault();
    addOwner();
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
      .delete(`http://localhost:5000/owner/${id}`, input)
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
          <div className="shop-map">
        <div className="input-container">
          <div className="shop-name">
            <label />
            Shop Name
            <label />
            <input
              onChange={(e) => handleChange(e)}
              /* value={input.shop_name} */
              type="text"
              name="shop_name"
            />
            <label />
            Address
            <label />
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="address"
            />
            <label>Phone number</label>
            <input
              onChange={(e) => handleChange(e)}
              name="phone"
            />
            <br />
            Coordinates <i>(get coordinates from marker on map)</i>
            <br />
            <label>Latitude</label>
            <input onChange={(e) => handleChange(e)} name="lat" />
            <label>Longitude</label>
            <input name="lng" />
            <br />
            <button onClick={(e) => handleAddOwner(e)}>Submit</button>
          </div>
        </div>
        <div className="map-size">
        <Location />
        </div>
        </div>
        <div>
          {/* <Grid container>
            <Grid>
              <Paper></Paper>
            </Grid>
          </Grid> */}
          <div className="shop-cont">
            {owner.map((param) => (
              <div key={param.id}>
                  {`Shop name :${param.shop_name}`}
                  {`Address:${param.address}`}
                <button onClick={() => deleteOwner(param.id)}>DELETE</button>
                <AddMenu ownerDetails={param} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Owner;
