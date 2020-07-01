import axios from 'axios';

axios.interceptors.request.use((req) => {
        const token = window.localStorage.getItem('userToken');
        if (token) req.headers.Authorization = token;
        return req;
    },
    (err) => {
        Promise.reject(err)
    })