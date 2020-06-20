import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from "../actions/auth";


import axios from "axios";

const state = {
    token: localStorage.getItem('userToken') || '',
    status: '',
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
};

const actions = {
    [AUTH_REQUEST]: ({
        commit
    }, user) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            axios({
                    url: 'http://localhost:3000/api/auth/login',
                    data: user,
                    method: 'POST'
                })
                .then(resp => {
                    const token = resp.data.token;
                    console.log(token)
                    localStorage.setItem('userToken', token);
                    axios.defaults.headers.common['Authorization'] = token
                    commit(AUTH_SUCCESS, token), user;
                    resolve(resp)
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem('userToken')
                    reject(err);
                });
        });
    },
    [AUTH_LOGOUT]: ({
        commit,
    }) => {
        return new Promise((resolve) => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem('userToken');
            delete axios.defaults.headers.common['Authorization']
            resolve();
        });
    }
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, token) => {
        state.status = "success";
        state.token = token;
    },
    [AUTH_ERROR]: (state) => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};