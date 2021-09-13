// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import React, { useState, useEffect } from "react";
import "./App.css";
import OwnerView from "./OwnerView";
import UserView from "./UserView";
import React, { useState } from "react";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Usermap from "./components/Usermap";

function App() {
  // const [isUser, setIsUser] = useState([]);
  //const [isOwner, setIsOwner]= useState([]);
  const [isUser, setisUser] = useState(true);

  const handleChangeView = (isUser) => {
    setisUser(isUser);
  };

  return (
    <body>
      <img src="https://user-images.githubusercontent.com/86279819/132444881-5d557210-69d1-4c8f-81ef-e91a87e342b7.png" width="400" height="150" class="center"/>
      <div className="App">
        {/* <OwnerView /> */}
        
        <div>
          <Router>
            <div className="linkers">
              <div className="user-btn">
                <Link to="/">
                  <img
                    src="https://image.flaticon.com/icons/png/512/273/273177.png"
                    height="50"
                    width="50"
                  /><div>Shop</div>
                </Link>
              </div>
              <div className="owner-btn">
                <Link to="/owner">
                  <img
                    src="https://image.flaticon.com/icons/png/512/3579/3579080.png"
                    height="50"
                    width="50"
                  /><div>Owner</div>
                </Link>
              </div>
            </div>
            <Route path="/user" exact component={Usermap} />
            <Route path="/owner" exact component={OwnerView} />
            <Route path="/" exact component={Search} />
          </Router>
          {/* {(isUser)? 
    <><button className="businessbutton" onClick={()=>handleChangeView(false)}>Post your business here</button><br/></> : <div/>}
    </div>

   {(isUser)? <UserView/>: <OwnerView/>} */}
        </div>
      
      </div> 
    </body>
  );
}

export default App;
