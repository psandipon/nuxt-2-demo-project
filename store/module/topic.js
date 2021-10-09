// initial state
export const state = () => ({
  topics: []
});

export const getters = {
  GET_TOPICS_DATA: state => {
    return state.topics;
  }
};

// mutations
const mutations = {
  SET_TOPICS_DATA(state, data) {
    state.topics = data;
  }
};

// Actions
const actions = {
  FETCH_TOPICS_DATA({ commit }, searchParam = {}) {
    searchParam = {
      userid: 1
    };
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/events/getAllEvents", searchParam)
        .then(function(response) {
          commit("SET_TOPICS_DATA", response.data);
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
