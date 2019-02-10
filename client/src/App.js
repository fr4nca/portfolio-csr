import React, { Component } from "react";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Live from "./components/Live/Live";
import Repos from "./components/Repos/Repos";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    navHeight: ""
  };

  setNavHeight = h => {
    this.setState({
      navHeight: h
    });
  };

  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar setNavHeight={this.setNavHeight} />
        {/* About */}
        <About navHeight={this.state.navHeight} />
        {/* Live Apps */}
        <Live />
        {/* Repos */}
        <Repos />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
