import DefaultTheme from 'vitepress/theme';
import 'lakelib/lib/lake.css';
import './index.css';
import Example from './Example.vue';
import DefaultEditor from './DefaultEditor.vue';
import MiniatureEditor from './MiniatureEditor.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('example', Example);
    app.component('DefaultEditor', DefaultEditor);
    app.component('MiniatureEditor', MiniatureEditor);
  },
};
