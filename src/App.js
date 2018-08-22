import React from 'react';
import axios from 'axios';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
