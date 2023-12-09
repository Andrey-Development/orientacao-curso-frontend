import axios from 'axios';

const api = axios.create({
  baseURL: 'https://orientation-plataform.onrender.com/',
});

export default api;