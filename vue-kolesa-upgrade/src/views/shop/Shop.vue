<template>
  <div>
    <section class="promo promo--mb24px">
      <img class="promo__img"
      src="@/../src/assets/img/promo/promo-desktop.jpg"
      width="940" height="335" alt="Промо летней распродажи">
    </section>
    <hot-buttons>
    </hot-buttons>
    <section class="main-catalog">
      <tabs
        @sorttabs="sortTabs">
      </tabs>
      <ul class="product-list">
        <product-card
          v-for="product in sortedProducts"
          :key="product.id"
          :product="product"
          @openCard="openCard">
        </product-card>
      </ul>
    </section>

    <modal-card
      :product='modalData'
      :is-open="isModalOpen"
      @close="closeModal">
    </modal-card>
  </div>
</template>

<script>
import axios from '@/axios';

import modalCard from './components/modal.vue';
import hotButtons from './components/hot-buttons.vue';
import tabs from './components/tabs.vue';
import productCard from './components/product-card.vue';

export default {
  name: 'ShopPage',

  components: {
    hotButtons,
    tabs,
    productCard,
    modalCard,
  },

  data() {
    return {
      modalData: {},
      isModalOpen: false,
      selectedTab: 'all',
      clothes: [],
      accessories: [],
    };
  },

  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        console.log(response.data);
        this.clothes = response.data.map((product) => {
          product.category = 'clothes';
          return product;
        });
      }).catch((err) => {
        console.log('Data getting error', err);
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        console.log(response.data);
        this.accessories = response.data.map((product) => {
          product.category = 'accessories';
          return product;
        });
      }).catch((err) => {
        console.log('Data getting error', err);
      });
  },

  computed: {
    allProducts() {
      return [...this.clothes, ...this.accessories];
    },

    filteredProducts() {
      if (this.selectedTab === 'all') return this.allProducts;
      return this.allProducts.filter((product) => product.category === this.selectedTab);
    },

    sortedProducts() {
      return [...this.filteredProducts].sort((product) => (product.isNew ? -1 : 1));
    },
  },

  methods: {
    openCard(product) {
      this.isModalOpen = true;
      this.modalData = product;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    sortTabs(selectedTab) {
      this.selectedTab = selectedTab;
    },

    setSearch(e) {
      this.search = e.target.value;
    },
  },
};
</script>
