let API_URL;
// API_URL = 'https://api-env-2.sg4q2tibb2.us-west-2.elasticbeanstalk.com/api';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:8080/api';
} else {
  API_URL = 'https://api-env-2.sg4q2tibb2.us-west-2.elasticbeanstalk.com/api';
}
export default API_URL;
