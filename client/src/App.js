import React, { Component } from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Live from "./components/Live";
import Repos from "./components/Repos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar />
        {/* About */}
        <About />
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
