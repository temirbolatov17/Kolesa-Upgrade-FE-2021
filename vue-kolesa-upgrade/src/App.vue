<template>
  <div id="app">
    <body class="page-body">
      <div class="wrapper">
          <header class="page-header container">
              <div class="page-header__wrapper">
                  <a class="logo" href="index.html">
                      <img class="logo__img" src="../src/assets/img/icons/main-logo-icon.svg"
                      width="215" height="35" alt="Логотип компании Kolesa Group">
                  </a>

                  <search-form :searchValue="search" @setSearch="setSearch">
                  </search-form>

                  <user-area>
                  </user-area>

              </div>
          </header>
          <main class="page-main container">
              <h1 class="visually-hidden">Kolesa Shop для сотрудников компании</h1>

              <navigation>
              </navigation>

              <section class="promo promo--mb24px">
                  <img class="promo__img" src="../src/assets/img/promo/promo-desktop.jpg"
                  width="940" height="335" alt="Промо летней распродажи">
              </section>
              <hot-buttons>

              </hot-buttons>
              <section class="main-catalog">
                  <tabs  @sorttabs="sortTabs">
                  </tabs>

                  <product-card>
                  </product-card>
              </section>
          </main>

          <page-footer>
          </page-footer>

          <modal-card :data='modalData' :is-open="isModalOpen" @close="closeModal">
          </modal-card>

      </div>
  </body>
  </div>
</template>

<script>
import axios from './axios';
import modalCard from './components/modal.vue';
import searchForm from './components/search.vue';
import userArea from './components/user.vue';
import navigation from './components/navigation.vue';
import hotButtons from './components/hot-buttons.vue';
import tabs from './components/tabs.vue';
import productCard from './components/product-card.vue';
import pageFooter from './components/footer.vue';

export default {
  name: 'App',

  components: {
    modalCard,
    searchForm,
    userArea,
    navigation,
    hotButtons,
    tabs,
    productCard,
    pageFooter,
  },

  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        console.log(response.data);
        this.clothes = response.data;
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        console.log(response.data);
        this.accessories = response.data;
      });
  },

  data() {
    return {
      modalData: {},
      isModalOpen: false,
      search: '',
      selectedTab: 'all',
      clothes: [],
      accessories: [],
    };
  },

  computed: {

    newClothes() {
      return this.clothes.map((product) => (product.category === 'clothes'));
    },

    newAccessories() {
      return this.accessories.map((product) => (product.category === 'accessories'));
    },

    allProducts() {
      return [...this.clothes, ...this.accessories];
    },

    filteredProducts() {
      if (this.selectedTab === 'all') return this.allProducts;
      return this.allProducts.filter((product) => product.id === this.selectedTab);
    },

    sortedProducts() {
      return [...this.filteredProducts].sort((product) => (product.isNew ? -1 : 1));
    },
  },

  methods: {
    openCard(data) {
      this.openModal();
      this.modalData = data;
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

<style lang="scss">
  @import 'components/style.scss';
</style>
