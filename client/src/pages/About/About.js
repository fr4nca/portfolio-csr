import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="bg-light p-2">
        <div className="container">
          <h2 className="section-heading">Skills</h2>
          <ul className="skills-list">
            <li>
              <i className="fab fa-react fa-2x" /> React
            </li>
            <li>
              <i className="fab fa-angular fa-2x" /> Angular
            </li>
            <li>
              <i className="fab fa-node-js fa-2x" /> Node
            </li>
            <li>
              <i className="fab fa-python fa-2x" /> Python
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
