import DefaultTheme from 'vitepress/theme';
import './index.css';
import Example from './Example.vue';
import ExampleHeader from './ExampleHeader.vue';
import DefaultEditor from './DefaultEditor.vue';
import MiniatureEditor from './MiniatureEditor.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('example', Example);
    app.component('ExampleHeader', ExampleHeader);
    app.component('DefaultEditor', DefaultEditor);
    app.component('MiniatureEditor', MiniatureEditor);
  },
};
