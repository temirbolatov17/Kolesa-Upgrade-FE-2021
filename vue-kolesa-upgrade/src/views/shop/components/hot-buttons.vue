<template>
  <section class="hot-buttons">
    <ul class="hot-buttons__list">
      <li class="hot-button__item">
        <button class="hot-buttons__button hot-buttons__button--green">
          <span>➕</span>
          Получить баллы
        </button>
      </li>
      <li class="hot-button__item">
        <button class="hot-buttons__button hot-buttons__button--yellow"
        @click="goToPage">
          <span>❓</span>
          Как получить баллы
        </button>
      </li>
      <li class="hot-button__item">
        <button class="hot-buttons__button hot-buttons__button--blue">
          <span>🎁</span>
          Получить баллы
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Hot-buttons',
  methods: {
    goToPage() {
      this.$router.push({ name: 'Score' });
    },
  },
};
</script>
