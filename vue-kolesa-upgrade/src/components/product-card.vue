<template>
  <ul class="product-list js__catalog" v-if="filteredProducts === selectedTab">
    <li class="product-list__item card" v-for="product in sortedProducts"
      :key="product.id" @click="openCard(product)">
      <div class="card__image">
        <img :src="product.mainImage"
        width="300" height="300" alt="">
        <span v-if="product.isNew" class="card__badge">new</span>
      </div>
      <div class="card__description description">
        <span class="description__price">{{ product.price }} баллов </span>
        <h3 class="description__title">{{ product.title }}</h3>
        <p class="description__hint">
          {{
            product.sizes && item.sizes.length ? `Размеры ${String(item.sizes)}` : ''
          }}
        </p>
      </div>
      <button class="button button--card-order" type="button"
      >Заказать</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'product-card',
  props: {
    clothes: Array,
    accessories: Array,
    allProducts: Array,
    selectedTab: String,
  },
  data() {
    return {
    };
  },

  methods: {
    openModal() {
      this.isOpen = true;
    },

  },

  computed: {

    filteredProducts() {
      if (this.selectedTab === 'all') return this.allProducts;
      return this.allProducts.filter((product) => product.category === this.selectedTab);
    },

    sortedProducts() {
      return [...this.filteredProducts].sort((product) => (product.isNew ? -1 : 1));
    },
  },
};
</script>
