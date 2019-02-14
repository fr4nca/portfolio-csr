import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  state = {
    navHeight: "",
    checked: false
  };

  componentDidMount() {
    this.props.setNavHeight(this.nav.current.clientHeight);
    this.setState({
      navHeight: this.nav.current.clientHeight
    });
  }

  onChange = () => {
    this.setState({
      ...this.state,
      checked: !this.state.checked
    });
  };

  handleClick = () => {
    if (this.state.checked)
      this.setState({
        ...this.state,
        checked: false
      });
  };

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
          <i id="menu-icon" className="fas fa-bars fa-2x" />
          <input
            type="checkbox"
            id="menu-button"
            checked={this.state.checked}
            onChange={this.onChange}
          />
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
                  onClick={this.handleClick}
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
                  onClick={this.handleClick}
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
                  onClick={this.handleClick}
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
                  onClick={this.handleClick}
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
