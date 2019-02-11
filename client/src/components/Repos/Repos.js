import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

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
            <div id="repos">
              {edges.map(edge => (
                <h1 key={edge.node.id}>{edge.node.id}</h1>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
