---
layout: example
---

<script setup>
import { onMounted, onUnmounted } from 'vue';

const toolbarItems = [
  'undo',
  'redo',
  '|',
  'heading',
  'fontFamily',
  'fontSize',
  '|',
  'formatPainter',
  'removeFormat',
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'superscript',
  'subscript',
  'code',
  'moreStyle',
  '|',
  'fontColor',
  'highlight',
  '|',
  'list',
  'numberedList',
  'bulletedList',
  'checklist',
  '|',
  'align',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'alignJustify',
  '|',
  'indent',
  'increaseIndent',
  'decreaseIndent',
  '|',
  'image',
  'link',
  'codeBlock',
  'blockQuote',
  'paragraph',
  'hr',
  '|',
  'selectAll',
];

onMounted(() => {
  if (window.editor) {
    window.editor.unmount();
  }
  window.LAKE_LANGUAGE = localStorage.getItem('lake-example-language') ?? 'en-US';
  import('lakelib').then(module => {
    const { Editor, Toolbar, Utils } = module;
    Utils.query('.lake-editor').attr('dir', localStorage.getItem('lake-example-direction') ?? 'ltr');
    const toolbar = new Toolbar({
      root: '.lake-toolbar-root',
      items: toolbarItems,
    });
    const editor = new Editor({
      root: '.lake-root',
      toolbar,
      value: '<p><a href="aa">New link</a></p>',
    });
    editor.render();
    window.editor = editor;
  });
});
onUnmounted(() => {
  if (window.editor) {
    window.editor.unmount();
    window.editor = null;
  }
});
</script>

<div class="lake-editor">
  <div class="lake-toolbar-root"></div>
  <div class="lake-root"></div>
</div>

<style global>
.lake-toolbar-root {
  border: 1px solid #d9d9d9;
  border-bottom: 0;
}
.lake-root {
  border: 1px solid #d9d9d9;
  height: calc(100vh - 160px);
  overflow: auto;
}
</style>
