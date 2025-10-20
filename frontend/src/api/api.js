import axios from 'axios';

// Replace this URL with your backend deployment URL
const API = axios.create({
  baseURL: 'https://textingfactory-1.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;

