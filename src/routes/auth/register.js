import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let roles = [];

  const [registerFormData, setRegisterFromData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [rolesData, setRolesData] = useState(roles);

  let realRoles = [];

  useEffect(() => {
    console.log("Roles: ", rolesData[0]);
    realRoles.push(rolesData[0]);
    console.log(realRoles);
  }, [rolesData]);

  useEffect(() => {
    console.log("Roles: ", realRoles);
  }, [realRoles]);

  useEffect(() => {
    console.log("Form: ", JSON.stringify(registerFormData));
  }, [registerFormData]);

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    setRegisterFromData({ ...registerFormData, [name]: value });
  }

  let handleRoles = (event) => {
    setRolesData([event.target.value]);
  };

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

    if (realRoles.includes("ROLE_CLIENT")) {
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          username: registerFormData.username,
          email: registerFormData.email,
          password: registerFormData.password,
          roles: realRoles,
        }),
      }).then((response) => console.log(response));
    } else {
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          username: registerFormData.username,
          email: registerFormData.email,
          password: registerFormData.password,
          roles: ["ROLE_ENTREPRISE"],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const { token } = data;
          localStorage.setItem("realtoken", token);
          localStorage.getItem("realtoken");
        })
        .then(navigate("/cvs/"));
    }
  }

  return (
    <>
      <div>
        <p> fill form: </p>
      </div>
      <div style={{ width: "400px !important", marginLeft: "50px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={registerFormData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="username, you need it for login"
            name="username"
            value={registerFormData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="password, you need it for login"
            name="password"
            value={registerFormData.password}
            onChange={handleChange}
            required
          />

          <label>
            <p>client</p>
            <input
              type="radio"
              name="role"
              value="ROLE_CLIENT"
              onChange={handleRoles}
            />
          </label>
          <label>
            <p>entreprise</p>
            <input
              type="radio"
              name="role"
              value="ROLE_ENTREPRISE"
              onChange={handleRoles}
            />
          </label>
          <button type="submit">register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
