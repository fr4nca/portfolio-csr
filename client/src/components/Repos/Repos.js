import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import RepoItem from "./RepoItem";

import "./Repos.css";

const query = gql`
  {
    viewer {
      repositories(first: 50, orderBy: { direction: DESC, field: CREATED_AT }) {
        edges {
          node {
            id
            name
            createdAt
            updatedAt
            url
            description
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
          }
        }
      }
    }
  }
`;

export default class Repos extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading...</h2>;
          if (error) return <h3>An error has ocurred</h3>;

          const { edges } = data.viewer.repositories;

          return (
            <div id="repos" className="bg-light p-2">
              <div className="repo-grid">
                {edges.map(({ node: repo }) => (
                  <RepoItem key={repo.id} {...repo} />
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
