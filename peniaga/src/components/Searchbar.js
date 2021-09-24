import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.shop_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    //close scrollbar if the input box is empty
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CancelPresentationRoundedIcon id="cancel-btn" onClick={clearInput}/>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a
                className="dataItem"
                href={`http://localhost:3000/${value.shop_name}`}
                target="_blank"
              >
                <p id="shop">{value.shop_name}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
