import React, { Component } from "react";
import SingleFile from "./SingleFile";
import AddFiles from "./AddFiles";

export default class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    fetch("http://localhost:8080/getCVFiles", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => this.setState({ files: data }));
  }

  render() {
    return (
      <div>
        <div className="row">
          <AddFiles />
        </div>
        <div>
          <p>Uploaded CV Files: </p>
        </div>
        <div className="row" style={{ width: "400px !important" }}>
          {this.state.files && (
            <ul
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {this.state.files.map((item) => (
                <SingleFile key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
