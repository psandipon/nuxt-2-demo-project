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
      userid: this.$auth.user.userid,
      parentuserid:  this.$auth.user.parentuserid
    };
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/trips/getAllTrips", searchParam)
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
