<template>
  <footer class="page-footer">
      <div class="footer container">
          <div class="footer__social">
              <p class="footer__copyright">© Kolesa Group</p>
              <icons>
              </icons>
          </div>
          <div class="footer__support support">
              <div class="support__questions">
                  <p>Есть идеи что улучшить?</p>
                  <p>Не знаешь, с кем решить проблему?</p>
              </div>
              <button class="support__button">Написать</button>
          </div>
      </div>
  </footer>
</template>

<script>
import icons from '@/components/icons.vue';

export default {
  name: 'Page-footer',
  components: {
    icons,
  },
};
</script>
