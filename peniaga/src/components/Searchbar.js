import React from 'react';
import './Searchbar.css';

function Searchbar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}/>
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default Searchbar
