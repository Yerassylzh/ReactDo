import axios from "axios";
import { ACCESS_TOKEN, baseUrl, REFRESH_TOKEN } from "./constants";
import { jwtDecode } from "jwt-decode";
import { navigateRef } from "./pages/App";

export let api = axios.create({
  baseURL: baseUrl + "/api/",
  headers: {
    Authorization: "",
  },
});

export const isTokenExpired = (token) => {
  const decoded = jwtDecode(token);
  const now = Date.now() / 1000;
  return decoded.exp <= now;
};

api.interceptors.request.use(async (config) => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  if (!refreshToken || isTokenExpired(refreshToken)) {
    return config;
  }

  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!accessToken || isTokenExpired(accessToken)) {
    try {
      const response = await axios.post(`${baseUrl}/api/token/refresh/`, {
        refresh: refreshToken,
      });
      if (response.status == 200) {
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        accessToken = response.data.access;
      } else {
        console.log(`Could not refresh tokens: ${response}`);
      }
    } catch (error) {
      console.log(`An error occured when refreshing tokens: ${error}`);
      // Unauthorized error will be handled on response interceptor
    }
  }
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(REFRESH_TOKEN);
      localStorage.removeItem(ACCESS_TOKEN);
      navigateRef("/login/");
    }
    return Promise.reject(error);
  }
);
