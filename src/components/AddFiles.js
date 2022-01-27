import React, { Component } from 'react';
import "../App.css";

export default class AddFiles extends Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({file:event.target.files[0]})
  }

  handleSubmit(event) {
    event.preventDefault();
    
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Access-Control-Allow-Origin", "*")

    const formData = new FormData();
    formData.append('cv', this.state.file);
    fetch('http://localhost:8080/uploadCVFile', {
      method: 'post',
      mode: 'cors',
      body: formData,
      headers: myHeaders,
    }).then(res => {
      if(res.ok) {
        console.log(res.data);
        alert("File uploaded successfully.")
        setTimeout(window.location.reload(), 6000);
      }
    });
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <p>
                CV file to upload:
              </p>
              <input type="file" onChange={this.onChange} class="form-control-file" id="exampleFormControlFile1" accept = "application/pdf" />
            </div>
            <div className="form-group">
              <button type="submit" class="customButton btn btn--stripe">Upload</button>
            </div>
          </form>
        </div>
    );
  }



}
