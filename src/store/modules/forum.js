import {
    FORUM_POST,
    FORUM_COMMENT,
    FORUM_SUCCESS
} from "../actions/forum";

import {
    mainAxios
} from "./../../../http-common";

const state = {

};

const getters = {
    newPost:
};

const actions = {
    [FORUM_POST]: ({
        commit
    }, post) => {
        return new Promise((resolve, reject) => {
            commit(FORUM_POST);
            mainAxios({
                    url: "/posts",
                    data: post,
                    method: "POST"
                })
                .then(resp => {
                    commit(FORUM_SUCCESS, newPost), user;
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)
                })

        })
    }
}

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
};