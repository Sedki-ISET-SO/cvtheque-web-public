//import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";

function Forms() {
    let params = useParams();
    return <h1>Invoice {params.cvId}</h1>;
}

export default Forms;