import React from 'react';
import Searchbar from './Searchbar';
import Regioncard from './Regioncard';
import './Home.css'

const Home = () => {
    return (
      <div className="home">
        <div className="search-bar"><Searchbar 
        placeholder="Nasi Lemak" 
        // data={props.item_name} //uncomment after mapping item_name
        />
        <Regioncard/>
        </div>
      </div>
    );
}

export default Home
