import React, { Component } from "react";
import "./style.css";
import Navbar from "./pages/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";

import Projects from "./pages/Projects/Projects";
import Repos from "./pages/Repos/Repos";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

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
          {/* <Projects /> */}
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
