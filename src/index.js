import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


const getToken = () => {
  const url = 'https://dat-day-z.auth0.com/oauth/token';
  const data = {
    "audience": "http://ec2-34-221-7-217.us-west-2.compute.amazonaws.com/api",
    "grant_type": "client_credentials",
    "client_id": process.env.REACT_APP_CLIENT_ID,
    "client_secret": process.env.REACT_APP_CLIENT_SECRET
  };
  return axios.post(url, data, { headers: { 'content-type': 'application/json' }})
    .then(response => {
      console.log(response);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      localStorage.setItem('expires_at', response.data.expires_in * 1000 + new Date().getTime());
    })
    .catch(error => {
      console.error(error);
    });
};

const isAuthenticated = () => {
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
};

setInterval(getToken, 600000); // Every 10 mins
getToken()
  .then(() => {
    if (isAuthenticated()) {
      ReactDOM.render(<App />, document.getElementById('root'));
    }
  });

registerServiceWorker();


