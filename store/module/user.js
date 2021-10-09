// initial state
export const state = () => ({
  users: []
});

export const getters = {
  GET_USERS_DATA: state => {
    return state.users;
  }
};

// mutations
const mutations = {
  SET_USERS_DATA(state, data) {
    state.users = data;
  }
};

// Actions
const actions = {
  FETCH_USERS_DATA({ commit }, searchParam = {}) {
    searchParam = {
      parentuserid: 1
    };
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/users/getdrivers", searchParam)
        .then(function(response) {
          commit("SET_USERS_DATA", response.data);
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
