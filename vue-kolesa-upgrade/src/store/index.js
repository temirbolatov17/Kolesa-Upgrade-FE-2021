import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      score: 0,
      avatarUrl: '',
      name: '',
    },
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateUserInfo', data);
          }
        });
    },
  },
});
