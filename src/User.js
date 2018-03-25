import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table } from 'semantic-ui-react';


const AllUsers = () => (
  <Query
    query={gql`
      {
        allUsers {
          firstName
          lastName
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Table singleLine>
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            data.allUsers.map(({firstName, lastName}) => {
              return (
              <Table.Row>
                <Table.Cell>{firstName}</Table.Cell>
                <Table.Cell>{lastName}</Table.Cell>
              </Table.Row>
              );
            })
          }
        </Table.Body>
        </Table>
      );
    }}
  </Query>
);

export default AllUsers;
