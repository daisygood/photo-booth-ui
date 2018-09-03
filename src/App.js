import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import client from './ApolloClient';
import ResponsiveContainer from './ResponsiveContainer';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <ResponsiveContainer />
        </div>
      </Router>
    </ApolloProvider>
  );

};

export default App;
