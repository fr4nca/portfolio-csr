import React from "react";
import { Link } from "react-scroll";

import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div className="about-content">
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
            to="live"
            spy={true}
            smooth={true}
            duration={750}
            offset={-60}
          >
            <i className="fas fa-arrow-down fa-3x" />
          </Link>
        </div>
      </div>
    </div>
  );
}
