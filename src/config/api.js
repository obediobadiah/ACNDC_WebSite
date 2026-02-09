// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://acndc-backend.vercel.app/api'
  : 'http://localhost:5001/api';

export default API_BASE_URL;
