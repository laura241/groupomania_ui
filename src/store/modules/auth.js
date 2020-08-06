import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
} from "../actions/auth";


import axios from "axios";

const state = {
    token: localStorage.getItem('userToken') || '',
    user: localStorage.getItem('user') || '',
    status: '',
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    userAuthenticated: state => state.userId,
    firstName: state => state.firstName,
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
                    const userId = resp.data.userId;
                    const firstName = resp.data.firstName;
                    console.log(token)
                    localStorage.setItem('userToken', token);
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('firstName', firstName);
                    axios.defaults.headers.common['Authorization'] = 'Bearer' + token
                    commit(AUTH_SUCCESS, token), user;
                    resolve(resp)
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem('userToken')
                    localStorage.removeItem('userId')
                    localStorage.removeItem('firstName')
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
            localStorage.removeItem('userId');
            localStorage.removeItem('firstName')
            delete axios.defaults.headers.common['Authorization']
            resolve();
        });
    },
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, token, userId, firstName) => {
        state.status = "success";
        state.token = token;
        state.userId = userId;
        state.firstName = firstName;
    },
    [AUTH_ERROR]: (state) => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = "";
        state.userId = "";
        state.firstName = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};