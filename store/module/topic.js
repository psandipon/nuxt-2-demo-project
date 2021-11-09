// initial state
export const state = () => ({
  topics: [],
  tripsLiveCount:{}
});

export const getters = {
  GET_TRIPS_DATA: state => {
    return state.topics;
  },
  GET_TRIPS_LIVE_DATA: state => {
    return state.tripsLiveCount
  }
};

// mutations
const mutations = {
  SET_TRIPS_DATA(state, data) {
    state.topics = data;
  },
  SET_TRIPS_LIVE_DATA(state, data){
    state.tripsLiveCount = data
  }
};

// Actions
const actions = {
  FETCH_TRIPS_DATA({ commit }, searchParam = {}) {
    searchParam = {
      userid: this.$auth.user.userid,
      parentuserid:  this.$auth.user.parentuserid
    };
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/trips/getAllTrips", searchParam)
        .then(function(response) {
          commit("SET_TRIPS_DATA", response.data);
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },

  FETCH_TRIPS_LIVE_DATA({ commit }, searchParam = {}) {
    searchParam = {
      userid: this.$auth.user.userid,
      parentuserid:  this.$auth.user.parentuserid
    };
    return new Promise((resolve, reject) => {
      this.$axios
        .$post("/trips/getLiveCounts", searchParam)
        .then(function(response) {
          commit("SET_TRIPS_LIVE_DATA", response.data);
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
