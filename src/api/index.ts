import axios from "axios";

const HTTPClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

HTTPClient.interceptors.request.use(
  (config) => {
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("error =>", error);
    return Promise.reject(error);
  }
);

HTTPClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error =>", error);
    return Promise.reject(error);
  }
);

export default HTTPClient;
