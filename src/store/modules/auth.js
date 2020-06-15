import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from "../actions/auth";

import {
    USER_REQUEST
} from "../actions/user";

import http from "../../../http-common";
import Axios from "axios";

const state = {
    token: localStorage.getItem('token') || '',
    status: '',
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
};

const actions = {
    [AUTH_REQUEST]: ({
        commit,
        dispatch
    }, {
        email,
        gpPassword
    }) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            http
                .post("/auth/login", {

                    email: email,
                    gpPassword: gpPassword

                })
                .then(response => {
                    const token = response.data.token
                    localStorage.setItem("token", token);
                    Axios.defaults.headers.common['Authorization'] = token
                    commit(AUTH_SUCCESS, token);
                    dispatch(USER_REQUEST);
                    resolve(response);
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem("token");
                    reject(err);
                });

        });
    },
    [AUTH_LOGOUT]: ({
        commit,
    }) => {
        return new Promise((resolve) => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem("token");
            resolve();
        });
    }
};

const mutations = {
    [AUTH_REQUEST]: state => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, token) => {
        state.status = "success";
        state.token = token;
    },
    [AUTH_ERROR]: state => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: state => {
        state.token = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};