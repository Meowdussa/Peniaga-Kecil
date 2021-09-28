import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
let axios = require("axios");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Bintulu = (props) => {
  let [owner, setOwner] = useState([]);

  useEffect(() => {
    getOwner();
  }, []);

  const getOwner = () => {
    axios
      .get("http://localhost:5000/ownerapi", owner)
      .then((response) => {
        console.log(response.data);
        setOwner(response.data);
      })
      .catch(function (error) {
        console.log("Error getting shop");
      });
  };

  return (
    <div style={{marginTop: "10vh",  marginBottom: "20vh"
  }}>
      <h1>Sokong peniaga kecil di Bintulu</h1>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {owner.map(
          (e) =>
            e.city === "Bintulu" && (
              <Grid item xs={4} >
                <Item style={{height:"40vh", padding: "5vh", margin: "2vh"}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/273/273177.png" height="50" width="50"/>
                  <a href={`http://localhost:3000/${e.shop_name}`}><h4>{e.shop_name}</h4></a>
                  <h5>{e.address}</h5>
                  <h5>
                    <PhoneAndroidIcon/>
                    <a href={`https://wa.me/${e.phone}`} target="blank">{e.phone}</a>
                  </h5>
                </Item>
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default Bintulu;
