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
      // axios.get('templates/-_RLsEGjof6i/data')
      //   .then((response) => {
      //     console.log(response.data);
      //     this.clothes = response.data.map((product) => {
      //       product.category = 'clothes';
      //       return product;
      //     });
      //   }).catch((err) => {
      //     console.log('Data getting error', err);
      //   });
      // axios.get('templates/q3OPxRyEcPvP/data')
      //   .then((response) => {
      //     console.log(response.data);
      //     this.accessories = response.data.map((product) => {
      //       product.category = 'accessories';
      //       return product;
      //     });
      //   }).catch((err) => {
      //     console.log('Data getting error', err);
      //   });
    },
  },
});
