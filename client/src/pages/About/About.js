import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="bg-light p-2">
        <div className="container">
          <div className="section">
            <h2 className="section-heading">About me</h2>
            <hr />
            <p className="me">
              My name is Victor Almeida França, I'm a fullstack WEB developer,
              mostly focusing on the backend side. My main stack involves a lot
              of Javascript, creating RESTfull and GraphQL APIs with Express in
              NodeJS and building frontend applications with React and Angular.
              I have a little bit of experience with Python in WEB development
              too, using Flask to create APIs.
            </p>
            <p className="me">
              Regarding my technologies skills, I have experience dealing with
              HTTP requests to create powerfull RESTful and GraphQL APIs,
              relational and non-relational databases (SQL, MongoDB),
              authorization and authentication both in back-end and front-end
              using the latest technologies (JWT, OAuth..), MVC design pattern,
              server-side and client-side rendering, websockets for real-time
              apps such as chats and social-media. Regarding deployment I like
              to use Docker to encapsulate my projects, Amazon AWS services and
              Digital Ocean droplets and clusters to host them, and I'm
              currently studying Kubernetes and container orchestration to
              easily scale projects.
            </p>
            <p className="me">
              I love everything that involves technology, it beeing developing
              applications, studying or even just watching conferences and
              getting to be up to date with what's trending.
            </p>
            <p className="me">
              I have a lot to discover and yet to learn and I'm more than
              excited to gradualy climb my way into being a successful
              professional doing what I love the most.
            </p>
            <p className="me">
              Below you can see my stack, my live apps and my latest
              repositories.
            </p>
            <hr />
          </div>
          <div className="section">
            <h2 className="section-heading">Skills</h2>
            <ul className="skills-list">
              <div id="frameworks">
                <li>
                  <i className="fab fa-node-js fa-2x" />
                  NodeJS
                </li>
                <li>
                  <i className="fab fa-react fa-2x" />
                  React
                </li>
                <li>
                  <i className="fas fa-code fa-2x" />
                  Back-end
                </li>
              </div>
              <div id="technologies">
                <li>
                  <i className="fab fa-html5 fa-2x" />
                  HTML5
                </li>
                <li>
                  <i className="fab fa-css3 fa-2x" />
                  CSS3
                </li>
                <li>
                  <i className="fab fa-js-square fa-2x" />
                  JavaScript
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
