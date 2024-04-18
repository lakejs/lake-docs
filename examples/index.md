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
