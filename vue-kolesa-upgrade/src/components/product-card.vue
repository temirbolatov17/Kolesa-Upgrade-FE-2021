<template>
  <ul class="product-list">
    <li class="product-list__item card"
      :key="product.id"
      :data-id="product.id"
      @click="openCard(product)">
        <div class="card__image">
          <img
          :src="product.mainImage"
          width="300"
          height="300"
          alt="">
          <span
          v-if="product.isNew"
          class="card__badge">
          new
          </span>
        </div>
      <div class="card__description description">
        <span class="description__price">
          {{ product.price }} баллов
        </span>
        <h3 class="description__title">
          {{ product.title }}
        </h3>
        <p class="description__hint">
          {{
            product.sizes && product.sizes.length ? `Размеры ${String(product.sizes)}` : ''
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
    product: Object,
  },
  data() {
    return {
    };
  },

  methods: {
    openModal() {
      this.isOpen = true;
    },

    openCard(product) {
      console.log(product);
      this.$emit('openCard', this.product);
    },

  },

  computed: {

  },
};
</script>
