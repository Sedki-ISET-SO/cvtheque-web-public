import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [loginFormData, setLoginFromData] = useState({
    username: "",
    password: "",
  });


  const [username, setUserName] = useState('');
  let handleUsername = (event) => {
    setUserName(event.target.value);
  };

  const [pass, setPass] = useState('');
  let handlePass = (event) => {
    setPass(event.target.value);
  };

  useEffect(() => {
    console.log("Form: ", JSON.stringify(loginFormData));
  }, [loginFormData]);

  useEffect(() => {
    console.log(username)
  }, [username]);

  useEffect(() => {
    console.log(pass)
  }, [pass]);

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    setLoginFromData({ ...setLoginFromData, [name]: value });
  }

  let navigate = useNavigate();

  let token = "";

  const [tokenn, setToken] = useState(undefined);

  function changeCommitId(newToken) {
    setToken(JSON.stringify(newToken));
  }

  useEffect(() => {
    console.log(tokenn);
    token = tokenn;
    window.sessionStorage.setItem("token", token);
  }, [tokenn]);

  function handleSubmit(event) {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        username: username,
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { token } = data;
        localStorage.setItem("realtoken", token);
        localStorage.getItem("realtoken");
      })
      .then(navigate('/cvs/'))

  }

  return (
    <>
      <div>
        <p> fill form: </p>
      </div>
      <div style={{ width: "400px !important", marginLeft: "50px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username, you need it for login"
            name="username"
            value={username}
            onChange={handleUsername}
            required
          />
          <input
            type="password"
            placeholder="password, you need it for login"
            name="pass"
            value={pass}
            onChange={handlePass}
            required
          />
          <button type="submit">login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
