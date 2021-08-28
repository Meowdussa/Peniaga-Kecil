import './App.css';
import OwnerView from "./OwnerView";
import UserView from './UserView'; 
import React, { useState } from "react";

function App() {
 // const [isUser, setIsUser] = useState([]);
  //const [isOwner, setIsOwner]= useState([]);
const [isUser, setisUser] = useState(true);

const handleChangeView = (isUser) =>{
  setisUser(isUser);
}


  
  return (
    <div className="App">
      <h1>ٱلْحَمْدُ لِلَّٰهِ</h1>
      {/* <OwnerView /> */}
    <div>
    {(isUser)? 
    <><button className="businessbutton" onClick={()=>handleChangeView(false)}>Post your business here</button><br/></> : <div/>}
    </div>
    
   {(isUser)? <UserView/>: <OwnerView/> }
    </div>

      
  );
}

export default App;
