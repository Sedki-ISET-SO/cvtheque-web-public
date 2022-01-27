import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate from "./routes/Generate";
import All from "./routes/All";
import Forms from "./routes/Forms";
import Register from "./routes/auth/register";
import Login from "./routes/auth/login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="cvs" element={<All />} />
          <Route path="cvs/:cvId" element={<Forms />} />
          <Route path="generate" element={<Generate />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
