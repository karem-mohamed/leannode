import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    // config.headers["Accept"] = "application/json";
    // config.headers["Content-Type"] = "application/json";

    // config.headers["Content-Type"] = "multipart/form-data";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
