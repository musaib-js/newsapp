import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className=" container text-center">
        <div
          className="spinner-border"
          style={{width: "3rem, height: 3rem, margin-top: 250px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow"
          style={{width: "3rem, height: 3rem, margin-top: 250px"}}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
