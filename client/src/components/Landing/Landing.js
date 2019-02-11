import React, { Component } from "react";
import { Link } from "react-scroll";

import "./Landing.css";

export default class Landing extends Component {
  state = {
    innerHeight: window.innerHeight
  };

  render() {
    return (
      <div id="landing" style={{ height: this.state.innerHeight + "px" }}>
        <div className="landing-content">
          <div className="container">
            <h1 className="l-heading">Victor Almeida França</h1>
            <p className="lead">Desenvolvedor Web, programador e entusiasta</p>
            <ul className="links">
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://github.com/fr4nca"
                >
                  <i className="fab fa-github fa-3x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://gitlab.com/fr4nca"
                >
                  <i className="fab fa-gitlab fa-3x" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://linkedin.com/fr4nca"
                >
                  <i className="fab fa-linkedin fa-3x" />
                </a>
              </li>
            </ul>
          </div>
          <div className="arrow">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={750}
              offset={-this.props.navHeight}
            >
              <i className="fas fa-arrow-down fa-3x" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
