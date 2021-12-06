import React, { Component } from 'react';
import SingleFile from './SingleFile';
import AddFiles from './AddFiles';

export default class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/getCVFiles',
    {   method:'GET',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
    })
    .then(response => response.json())
    .then(data => this.setState({files: data}))
  }

  render() {
    return (
        <div>
          <div className="row">
            <AddFiles />
          </div>
          <div><p>Uploaded CV Files: </p></div>
          <div className="row" style={{width: "400px !important"}}>
            <ul style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
              { this.state.files.map((item) => (
                <SingleFile key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
    )
  }

}
