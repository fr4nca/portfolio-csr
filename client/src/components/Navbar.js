import React from "react";
import { Link } from "react-scroll";

export default function Navbar({ visible }) {
  return (
    <div>
      <nav id="navbar">
        <h1 className="logo">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={750}
          >
            Victor França
          </Link>
        </h1>
        <ul className="nav">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="live"
              spy={true}
              smooth={true}
              offset={-60}
              duration={750}
            >
              Live Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="repos"
              spy={true}
              smooth={true}
              duration={750}
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
              duration={750}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
