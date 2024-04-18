---
layout: example
title: Default configuration
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const toolbarRef = ref(null);
const contentRef = ref(null);

onMounted(() => {
  if (window.editor) {
    window.editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor, Toolbar } = module;
    const toolbar = new Toolbar({
      root: toolbarRef.value,
    });
    const editor = new Editor({
      root: contentRef.value,
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

<div :class="$style.toolbar" ref="toolbarRef"></div>
<div :class="$style.content" ref="contentRef"></div>

<style module>
.toolbar {
  border: 1px solid #d9d9d9;
  border-bottom: 0;
}
.content {
  border: 1px solid #d9d9d9;
  height: 500px;
  overflow: auto;
}
</style>
