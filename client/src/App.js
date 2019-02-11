import React, { Component } from "react";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Repos from "./components/Repos/Repos";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import About from "./components/About/About";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`
  }
});

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
      <ApolloProvider client={client}>
        <div>
          {/* Navbar */}
          <Navbar setNavHeight={this.setNavHeight} />
          {/* Landing */}
          <Landing navHeight={this.state.navHeight} />
          {/* About */}
          <About />
          {/* Live Apps */}
          <Projects />
          {/* Repos */}
          <Repos />
          {/* Contact */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
