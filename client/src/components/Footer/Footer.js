import React from "react";
import { Link } from "react-scroll";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="footer" className="bg-dark text-center py-1">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="live"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="repos"
                spy={true}
                smooth={true}
                duration={500}
              >
                Repos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="main-footer" className="bg-darker text-center py-1">
        <div className="container">
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
            <li>
              <a href="mailto:fr4ncacc@gmail.com">
                <i className="fas fa-envelope fa-3x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
