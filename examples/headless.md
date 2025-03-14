---
layout: example
title: Headless editor
---

# {{ $frontmatter.title }}

This example shows how to customize a toolbar that is well adapted to your needs.

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const toolbarRef = ref(null);
const contentRef = ref(null);

let editor = null;

onMounted(() => {
  if (editor) {
    editor.unmount();
  }
  (async () => {
    const { createHeadlessEditor } = await import('/src/headless-editor');
    editor = createHeadlessEditor({
      toolbarRoot: toolbarRef.value,
      editorRoot: contentRef.value,
    });
  })();
});
onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
  }
});
</script>

<div class="vp-raw">
  <div :class="$style.toolbar" ref="toolbarRef"></div>
  <div :class="$style.content" ref="contentRef"></div>
</div>

<style module>
.toolbar {
  margin-top: 16px;
}
.toolbar :global .lake-button {
  margin-right: 8px;
  margin-bottom: 16px;
}
.content {
  border: 1px solid var(--lake-border-color);
  border-radius: 5px;
  height: 300px;
  overflow: auto;
}
.content :global .lake-container {
  min-height: 298px;
}
</style>

::: details Source code
<<< @/src/headless-editor.js
:::
