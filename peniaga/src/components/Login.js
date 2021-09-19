import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginStatus, setLoginStatus] = useState("");

  const isLogin = () => {
    axios
      .post(`http://localhost:5000/ownerapi/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(`Selamat datang!`);
        }
      })
      .catch((error) => {
        setError("Login error");
        setLoginStatus(`Nama pengguna/kata laluan salah!`);
      });
  };

  return (
    <div>
      <h1>Log Masuk</h1>
      <label>Nama Pengguna</label>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>Kata Laluan</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={isLogin}>LOG MASUK</button>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
