import Axios from 'axios';
import { parseCookies } from 'nookies';
const instance = Axios.create({
  // http://localhost:3000/api
  baseURL: 'https://nestjsspecial.herokuapp.com/api',
  headers: {
    Authorization: 'Bearer ' + parseCookies()?.auth_token,
  }
  // withCredentials: true,
});

// Add a request interceptor
// instance.interceptors.request.use((config) => {
//   const cookies = parseCookies();
//   if (!cookies?.auth_token) return config;
//   config.headers.Authorization = 'Bearer ' + cookies.auth_token;

//   return config;
// });

export default instance;