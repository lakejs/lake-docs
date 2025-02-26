import DefaultTheme from 'vitepress/theme';
import 'lakelib/lib/lake.css';
import './index.css';
import Layout from './Layout.vue';
import Example from './Example.vue';
import DefaultEditor from './DefaultEditor.vue';
import EmbeddedEditor from './EmbeddedEditor.vue';
import CommentBox from './CommentBox.vue';
import Button from './Button.vue';
import Dropdown from './Dropdown.vue';
// import LakeVueExample from '../../src/LakeVueExample.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('example', Example);
    app.component('DefaultEditor', DefaultEditor);
    app.component('EmbeddedEditor', EmbeddedEditor);
    app.component('CommentBox', CommentBox);
    app.component('Button', Button);
    app.component('Dropdown', Dropdown);
    // app.component('LakeVueExample', LakeVueExample);
  },
};
