// initial state
export const state = () => ({
  incidents: []
});

export const getters = {
  GET_INCIDENTS_DATA: state => {
    return state.incidents;
  }
};

// mutations
const mutations = {
  SET_INCIDENTS_DATA(state, data) {
    state.incidents = data;
  }
};

// Actions
const actions = {
  FETCH_INCIDENTS_DATA({ commit }, searchParam = {}) {
    searchParam = {
    	userid:1,
    	parentuserid:0
    };
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/events/getAllEvents", searchParam)
        .then(function(response) {
          commit("SET_INCIDENTS_DATA", response.data);
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
