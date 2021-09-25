import "./App.css";
import OwnerView from "./OwnerView";
import UserView from "./UserView";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Usermap from "./components/Usermap";
import Registerform from "./components/Registerform";
import Login from "./components/Login";
import Home from "./components/Home";
import Ownerprofile from "./Ownerprofile";
import Bintulu from "./components/Bintulu";
import Jitra from "./components/Jitra";
import Kl from "./components/Kl";
import Button from "@mui/material/Button";
import Shopprofile from "./Shopprofile";
import Privateroute from "./authentication/Privateroute";
import {AuthContext} from "./authentication/Authcontext";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) setAuthState(true);
  },[]);

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
          <AuthContext.Provider value={{authState,setAuthState}}>
          <Router>
            <div className="linkers">
              <div className="home-btn">
                <Link to="/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/619/619032.png"
                    height="50"
                    width="50"
                  />
                  <div>
                    Halaman
                    <br />
                    Utama
                  </div>
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
                  <div>Profil</div>
                </Link>
              </div>
            </div>
            {!authState && (
              <>
                <div className="owner-btn">
                  <Link id="logm" to="/logmasuk">
                    <Button id="logm" variant="contained">
                      LOG MASUK
                    </Button>
                  </Link>
                </div>
                <div className="signup-btn">
                  <Link id="daftar" to="/daftar">
                    <Button id="daftar" variant="contained">
                      DAFTAR
                    </Button>
                  </Link>
                </div>
              </>
            )}
            <Route path="/user" exact component={Usermap} />
            <Route path="/logmasuk" exact component={Login} />
            <Route path="/daftar" exact component={Registerform} />
            <Route path="/" exact component={Home} />
            <Route path="/bintulu" exact component={Bintulu} />
            <Route path="/jitra" exact component={Jitra} />
            <Route path="/kl" exact component={Kl} />
            <Route path="/shopprofile" exact component={Shopprofile} />
            <Route path="/profile" exact component={Ownerprofile} />
            {/* <Privateroute
              path="/profile"
              exact
              component={Ownerprofile}
              isAuth={validateToken}
            /> */}
          </Router>
          </AuthContext.Provider>
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
