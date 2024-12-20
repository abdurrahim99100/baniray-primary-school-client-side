import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxiosSecure = () => {
    // request interceptors add authorization header for every single call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // add a response status code
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, (error) => {
        // const status = error.response.status;

        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;