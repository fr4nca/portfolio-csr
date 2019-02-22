import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="bg-light p-2">
        <div className="container">
          <h2 className="section-heading">Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    );
  }
}
