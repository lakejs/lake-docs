import DefaultTheme from 'vitepress/theme';
import Example from './Example.vue';
import ExampleHeader from './ExampleHeader.vue';
import LakeEditor from './LakeEditor.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('example', Example);
    app.component('ExampleHeader', ExampleHeader);
    app.component('LakeEditor', LakeEditor);
  },
};
