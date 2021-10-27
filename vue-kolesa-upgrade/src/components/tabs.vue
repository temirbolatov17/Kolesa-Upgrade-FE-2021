<template>
  <form class="catalog-filter" action="#" method="GET">
    <legend class="visually-hidden">Сортировка товара</legend>
      <ul class="filter">
          <li class="filter__item"
          v-for="tab in tabs" :key="tab.id">
              <input class="filter__input js__filter-button" type="radio"
              :id="tab.id" name="products-sort"
              :value="tab.value" v-model="selectedTab" checked>
              <label :for="tab.id" @click="sortTabs(tab.value)">
              {{ tab.title }}</label>
          </li>
      </ul>
  </form>
</template>

<script>
const tabs = [
  {
    title: 'Все товары',
    value: 'all',
    id: 1,
  },
  {
    title: 'Одежда',
    value: 'clothes',
    id: 2,
  },
  {
    title: 'Аксессуары',
    value: 'accessories',
    id: 3,
  },
];

export default {
  name: 'tabs',
  props: {
    sorttabs: Array,
  },
  data() {
    return {
      tabs,
      selectedTab: 'all',
    };
  },

  methods: {
    sortTabs(selectedTab) {
      this.$emit('sorttabs', this.selectedTab = selectedTab);
    },
  },
};
</script>
