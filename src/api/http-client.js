import Vue from 'vue';
import axios from 'axios';
import http from 'http';
import https from 'https';

/**
 * Create http Client instance via axios.
 */
const httpClient = axios.create({
  // base URL for API Calls
  // set inside .env.xxx files in the <root>/
  baseURL: process.env.VUE_APP_BASE_API_URL,

  // keepAlive pools and reuses TCP connections,
  // so it's faster
  httpAgent: new http.Agent({
    keepAlive: true,
  }),
  httpsAgent: new https.Agent({
    keepAlive: true,
  }),

  // follow up to 10 HTTP 3xx redirects
  maxRedirects: 10,
});

httpClient.interceptors.response.use(
  success => success,
  (error) => {
    const { status, response: { data } } = error;

    if (status === 401) {
      // logic of refresh token
    }

    return Promise.reject(data);
  },
);

Vue.prototype.$http = httpClient;
