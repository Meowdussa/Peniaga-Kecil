import "./App.css";
import OwnerView from "./OwnerView";
import UserView from "./UserView";
import React, { useState } from "react";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Usermap from "./components/Usermap";
import Registerform from "./components/Registerform";
import Login from "./components/Login";
import Home from "./components/Home";
import Ownerprofile from "./Ownerprofile";

function App() {
  // const [isUser, setIsUser] = useState([]);
  //const [isOwner, setIsOwner]= useState([]);
  const [register, setRegister] = useState(false);
  const [isUser, setisUser] = useState(true);
  /*   const handleChangeView = (isUser) => {
    setisUser(isUser);
  }; */

  return (
    <body style={{ backgroundColor: "#caffbf" }}>
      <a href="/">
        <img
          src="https://user-images.githubusercontent.com/86279819/134089191-85f892dc-2c57-492f-9d7d-edfe312b9797.png"
          // width="400"
          // height="150"
          // className="center"
        />
      </a>
      <div className="App">
        {/* <OwnerView /> */}
        <div>
          {/* <button onClick={() => setRegister(true)}>Sign Up</button>
          <Popup trigger={register} setTrigger={setRegister}></Popup> */}
        </div>
        <div className="app-content">
          <Router>
            <div className="linkers">
              <div className="home-btn">
                <Link to="/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/619/619032.png"
                    height="50"
                    width="50"
                  />
                  <div>Halaman Utama</div>
                </Link>
              </div>
              <div className="user-btn">
                <Link to="/shop">
                  <img
                    src="https://image.flaticon.com/icons/png/512/273/273177.png"
                    height="50"
                    width="50"
                  />
                  <div>Shop</div>
                </Link>
              </div>
              <div className="profile-btn">
                <Link to="/profile">
                  <img
                    src="https://image.flaticon.com/icons/png/512/3579/3579080.png"
                    height="50"
                    width="50"
                  />
                  <div>Profile</div>
                </Link>
              </div>
            </div>
            <div className="owner-btn">
              <Link to="/logmasuk">
                <div>Log Masuk</div>
              </Link>
            </div>
            <div className="signup-btn">
              <Link to="/daftar">Daftar</Link>
            </div>
            <Route path="/user" exact component={Usermap} />
            <Route path="/logmasuk" exact component={Login} />
            <Route path="/daftar" exact component={Registerform} />
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Ownerprofile} />
          </Router>
          <div className="region"></div>
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
