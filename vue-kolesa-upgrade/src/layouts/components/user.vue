<template>
  <a class="user-area" href="#">
    <div class="user-area__avatar">
      <img
        :v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
      alt="Аватар пользователя">
    </div>
    <span class="user-area__name">{{ userInfo.name }}</span>
    <p class="user-area__balance"> {{ score }}</p>
  </a>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapState([
      'userInfo',
    ]),

    score() {
      return this.userInfo.score ? `${this.userInfo.score} баллов` : '';
    },
  },

  mounted() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
};
</script>
