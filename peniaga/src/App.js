import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import OwnerView from "./OwnerView";
import UserView from "./UserView";
import Usermap from "./components/Usermap";
import Registerform from "./components/Registerform";
import Login from "./components/Login";
import Home from "./components/Home";

import Ownerprofile from "./Ownerprofile";
import Bintulu from "./components/Bintulu";
import Jitra from "./components/Jitra";
import Kl from "./components/Kl";


import Privateroute from "./authentication/Privateroute";
import { AuthContext } from "./authentication/Authcontext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Keklapis from "./components/kedai/Keklapis";
import Supkawah from "./components/kedai/Supkawah";
import Chenkitchen from "./components/kedai/Chenkitchen";


function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  }, []);

  return (
    <body style={{ backgroundColor: "#caffbf" }}>
      <div className="app-content">
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            <Box  id="nav-bar" style={{width: "100vw"}} sx={{ flexGrow: 1 }}>
              <AppBar id="app-bar">
                <Toolbar>
                  <a href="/">
                    <img
                      src="https://user-images.githubusercontent.com/86279819/134771907-f6046058-75d5-4f08-b765-a4683013f957.png"
                      style={{ margin: "1vw" }}
                    />
                  </a>
                  <a href="/" className="home-btn">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/619/619032.png"
                      height="50"
                      width="50"
                    />
                    <Typography
                      style={{ color: "white", fontFamily: "monospace" }}
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      HALAMAN UTAMA
                    </Typography>
                  </a>
                  <a href="/kedai" className="user-btn">
                    <img
                      src="https://image.flaticon.com/icons/png/512/273/273177.png"
                      height="50"
                      width="50"
                    />
                    <Typography
                      style={{ color: "white", fontFamily: "monospace" }}
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      KEDAI
                    </Typography>
                  </a>
                  <a className="profile-btn" href="/profile">
                    <img
                      src="https://image.flaticon.com/icons/png/512/3579/3579080.png"
                      height="50"
                      width="50"
                    />
                    <Typography
                      style={{ color: "white", fontFamily: "monospace" }}
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      PROFIL
                    </Typography>
                  </a>
                  {!authState && (
                    <>
                      <div className="signup-btn">
                        <a id="daftar" href="/daftar">
                          <Button id="daftar" variant="contained">
                            DAFTAR
                          </Button>
                        </a>
                      </div>
                      <div className="owner-btn">
                        <a id="logm" href="/logmasuk">
                          <Button id="logm" variant="contained">
                            LOG MASUK
                          </Button>
                        </a>
                      </div>
                    </>
                  )}
                </Toolbar>
              </AppBar>
            </Box>
            <Route path="/user" exact component={Usermap} />
            <Route path="/logmasuk" exact component={Login} />
            <Route path="/daftar" exact component={Registerform} />
            <Route path="/" exact component={Home} />
            <Route path="/bintulu" exact component={Bintulu} />
            <Route path="/jitra" exact component={Jitra} />
            <Route path="/kl" exact component={Kl} />
            <Route path="/profile" exact component={Ownerprofile} />
            <Route path="/supkawah" exact component={Supkawah}/>
            <Route path="/keklapis" exact component={Keklapis}/>
            <Route path="/chenkitchen" exact component={Chenkitchen}/>


            {/* <Privateroute
              path="/profile"
              exact
              component={Ownerprofile}
              isAuth={validateToken}
            /> */}
          </Router>
        </AuthContext.Provider>
      </div>
    </body>
  );
}

export default App;
