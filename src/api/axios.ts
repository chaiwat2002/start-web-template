import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": ["application/json", "application/x-www-form-urlencoded"],
        "Accept": "application/json",
    }
})

instance.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);
