import React from 'react';
import axios from 'axios';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import client from './ApolloClient';
import ResponsiveContainer from './ResponsiveContainer';

const handleUploadImage = event => {
  const data = new FormData();

  Array.from(event.target.files).forEach(file => {
    data.append('files', file);
  });

  axios.post('http://localhost:8080/api/upload', data)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
};

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
