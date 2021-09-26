import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Regioncard from "./Regioncard";
import axios from "axios";

const Home = () => {
  let [owner, setOwner] = useState([]);

  useEffect(() => {
    getOwner();
  }, []);

  const getOwner = () => {
    axios
      .get("http://localhost:5000/ownerapi", owner)
      .then((response) => {
        // console.log(response.data);
        setOwner(response.data);
      })
      .catch(function (error) {
        console.log("Error getting shop");
      });
  };

  return (
    <div className="home">
      <div className="parent">
      <img
        style={{ width:"100vw" }}
        src="https://user-images.githubusercontent.com/86279819/134795518-a9c4ba6e-4a6e-4f46-81d3-6c2afa6843b8.jpg"
      />
      <div className="search-bar">
        <Searchbar id="search-bar" placeholder="Nasi Lemak" data={owner} />
      </div>
      </div>
      <Regioncard />
    </div>
  );
};

export default Home;
