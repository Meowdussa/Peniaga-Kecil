// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import React, { useState, useEffect } from "react";
import './App.css';
import OwnerView from "./OwnerView";
import UserView from './UserView'; 
import React, { useState } from "react";
import Owner from './OwnerView';
import Location from './components/Location';


function App() {
 // const [isUser, setIsUser] = useState([]);
  //const [isOwner, setIsOwner]= useState([]);
const [isUser, setisUser] = useState(true);

const handleChangeView = (isUser) =>{
  setisUser(isUser);
}



  
  return (
    <div>
    <div className="App">
      <h1>Peniaga Kecil</h1>
      {/* <OwnerView /> */}
    <div>
    {(isUser)? 
    <><button className="businessbutton" onClick={()=>handleChangeView(false)}>Post your business here</button><br/></> : <div/>}
    </div>

   {(isUser)? <UserView/>: <OwnerView/> }

    
    </div>
    <Location></Location>
    </div>
//useeffect get all owner 
      
  );
}

export default App;
