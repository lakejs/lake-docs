import { Editor, Toolbar } from 'lakelib';

const toolbar = new Toolbar({
  root: '.lake-toolbar-root',
});
const editor = new Editor({
  root: '.lake-root',
  toolbar,
});
editor.render();
