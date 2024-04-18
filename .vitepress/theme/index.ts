import DefaultTheme from 'vitepress/theme';
import Example from './Example.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('example', Example);
  }
};
