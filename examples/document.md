---
layout: example
---

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  if (window.editor) {
    window.editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor, Toolbar } = module;
    const toolbar = new Toolbar({
      root: '.lake-toolbar-root',
    });
    const editor = new Editor({
      root: '.lake-root',
      toolbar,
      value: window.defaultValue || '',
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
.document {
  background-color: #0000000d;
}
.document .header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.document .lake-editor {
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  max-width: none;
  min-width: 300px;
}
.document .lake-editor .lake-toolbar-root {
  position: fixed;
  top: 60px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-right: none;
}
.document .lake-editor .lake-root {
  height: auto;
  overflow: visible;
  margin: 110px auto;
  max-width: 1000px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
}
</style>
