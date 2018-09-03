let API_URL;

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:8080/api';
} else {
  API_URL = 'http://ec2-34-221-7-217.us-west-2.compute.amazonaws.com/api';
}
export default API_URL;
