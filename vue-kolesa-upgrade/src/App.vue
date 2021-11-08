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
                  <search-form
                    :searchValue="search"
                    @setSearch="setSearch">
                  </search-form>
                  <user-area>
                  </user-area>
              </div>
          </header>
          <main class="page-main container">
              <h1 class="visually-hidden">Kolesa Shop для сотрудников компании</h1>
              <navigation>
              </navigation>

              <router-view>

              </router-view>
          </main>
          <page-footer>
          </page-footer>
      </div>
  </body>
  </div>
</template>

<script>
import searchForm from './layouts/components/search.vue';
import userArea from './layouts/components/user.vue';
import navigation from './layouts/components/navigation.vue';
import pageFooter from './layouts/components/footer.vue';

export default {
  name: 'App',

  components: {
    searchForm,
    userArea,
    navigation,
    pageFooter,
  },

  data() {
    return {
      search: '',
    };
  },

  methods: {
    setSearch(e) {
      this.search = e.target.value;
    },
  },
};
</script>

<style lang="scss">
  @import 'components/style.scss';

  .loader {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
      }

      .lds-dual-ring::after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
</style>
