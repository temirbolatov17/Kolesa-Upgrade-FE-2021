<template>
  <a class="user-area" href="#">
    <div class="user-area__avatar">
      <img :src="userAvatar"
      alt="Аватар пользователя">
    </div>
    <span class="user-area__name">{{ userName }}</span>
    <p class="user-area__balance">{{ balance }} баллов</p>
  </a>
</template>

<script>
import axios from '../axios';

export default {
  name: 'user',

  props: {

  },

  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.userName = response.data.name;
        this.balance = response.data.score;
        this.userAvatar = response.data.avatarUrl;
      });
  },

  data() {
    return {
      balance: 0,
      userAvatar: '',
      userName: '',
    };
  },

  computed: {
  },
};
</script>
