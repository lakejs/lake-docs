---
layout: example
title: Read-only mode
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const contentRef = ref(null);

onMounted(() => {
  if (window.editor) {
    window.editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor } = module;
    const editor = new Editor({
      root: contentRef.value,
      value: window.defaultValue || '',
      readonly: true,
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

<div ref="contentRef"></div>
