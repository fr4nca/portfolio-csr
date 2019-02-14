import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  state = {
    navHeight: ""
  };

  componentDidMount() {
    this.props.setNavHeight(this.nav.current.clientHeight);
    this.setState({
      navHeight: this.nav.current.clientHeight
    });
  }

  render() {
    return (
      <div>
        <nav id="navbar" ref={this.nav}>
          <h1 className="logo">
            <Link
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              duration={750}
            >
              Victor França
            </Link>
          </h1>
          <i id="menu-arrow" className="fas fa-bars fa-2x" />
          <input type="checkbox" id="menu-button" />
          <div className="menu-wrapper">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-this.state.navHeight}
                  duration={750}
                >
                  Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-this.state.navHeight}
                  duration={750}
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
                  offset={-this.state.navHeight}
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
                  offset={-this.state.navHeight}
                  duration={750}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
