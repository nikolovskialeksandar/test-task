import axios from 'axios';

require('dotenv').config();

const instance = axios.create({ baseURL: 'https://api.github.com'});

instance.interceptors.request.use(function (config) {
  if(process.env.REACT_APP_GITHUB_OAUTH_TOKEN) {
    const token = `token ${process.env.REACT_APP_GITHUB_OAUTH_TOKEN}`;
    config.headers.Authorization = token;
  }
  
  return config;
});

export default instance;