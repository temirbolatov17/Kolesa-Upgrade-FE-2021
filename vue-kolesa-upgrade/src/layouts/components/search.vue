<template>
  <div class="search-form">
      <form class="search-form__item" action="#" method="GET">
        <input
        class="search-form__input"
        :value="searchValue"
        type="search" placeholder="Поиск" id="search"
        @input="$emit('setSearch', $event)"
        />
        <label for="search"></label>
      </form>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    searchValue: String,
  },
};
</script>
