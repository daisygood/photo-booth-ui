import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { ApolloProvider } from 'react-apollo';
import './App.css';
import client from './ApolloClient';
import User from './User';
import Header from './Header';

const App =  () =>  {

  return (
  <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <User />
      </div>
  </ApolloProvider>
  );

}

export default App;
