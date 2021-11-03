<template>
  <aside class="site-navigation">
    <nav class="navigation">
      <ul class="navigation__list" style="list-style: none">
        <li
          class="navigation__item"
          v-for="(item, index) in routes"
          :key="index"
        >
          <router-link
            class="navigation__link"
            :to="item.link"
            :exact="item.isExact"
            active-class="navigation__link--active"
            v-html="item.label"
          ></router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          link: '/',
          label: 'Оргсхема',
          isExact: true,
        },
        {
          link: '/about',
          label: 'Kolesa Team',
          isExact: false,
        },
        {
          link: '/shop',
          label: 'Kolesa Shop',
          isExact: false,
        },
        // {
        //   link: '#',
        //   label: 'Картина компании',
        // },
        // {
        //   link: '#',
        //   label: 'Новости',
        // },
        // {
        //   link: '#',
        //   label: 'Education',
        // },
        // {
        //   link: '#',
        //   label: 'Guidlines',
        // },
        // {
        //   link: '#',
        //   label: 'Библиотека',
        // },
        // {
        //   link: '#',
        //   label: 'FAQ',
        // },
      ],
    };
  },
};
</script>
