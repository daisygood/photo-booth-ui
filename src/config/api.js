let API_URL;

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:8080/api';
} else {
  API_URL = '';
}
export default API_URL;
