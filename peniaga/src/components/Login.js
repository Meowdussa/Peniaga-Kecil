import React, {useState} from 'react';
import { useForm } from "react-hook-form"; 
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const isLogin =()=>{
        axios
      .post(`http://localhost:5000/ownerapi/login`, {username: username, password: password} )
      .then((response) => {
        console.log(response);
        console.log("Logged in");
      })
      .catch((error) => {
        setError("Login error");
      });
    }

    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" onChange={e => {setUsername(e.target.value)}}/>
            <label>Password</label>
            <input type="password"onChange={e => {setPassword(e.target.value)}}/>
            <button onClick={isLogin}>Login</button>
        </div>
    )
}

export default Login
