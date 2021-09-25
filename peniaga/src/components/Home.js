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
      <div className="search-bar">
        <Searchbar
          placeholder="Nasi Lemak"
          data={owner}
        />
      </div>
      <Regioncard />
    </div>
  );
};

export default Home;
