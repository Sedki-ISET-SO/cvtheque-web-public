import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Generate extends Component {
  constructor(props) {
    super(props);
    this.state = { cvFileName: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ cvFileName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:8080/cv", {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cvFileName: this.state.cvFileName,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log(res.data);
        alert("cv generation started successfully.");
        setTimeout(window.location.reload(), 6000);
      }
    });
  }

  render() {
    return (
      <div>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/generate">Generate</Link> | <Link to="/">Home</Link> | <Link to="/cvs">CVS</Link> 
        </nav>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <p>CV file name</p>
            <input
              type="text"
              onChange={this.onChange}
              class="form-control-cv"
              id="exampleFormControlFile1"
            />
          </div>
          <div className="form-group">
            <button type="submit" class="customButton btn btn--stripe">
              Start CV Generating
            </button>
          </div>
        </form>
      </div>
    );
  }
}
