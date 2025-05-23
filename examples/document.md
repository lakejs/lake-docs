---
layout: false
title: Document editor
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { data } from '../assets/values/default-value.data.js';

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
  'moreStyle',
  '|',
  'fontColor',
  'highlight',
  '|',
  'list',
  'align',
  'indent',
  '|',
  'link',
  'image',
  'file',
  'specialCharacter',
  'codeBlock',
  'equation',
  'video',
  'twitter',
  'table',
  'blockQuote',
  'hr',
];

const slashItems = [
  'image',
  'file',
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'paragraph',
  'blockQuote',
  'numberedList',
  'bulletedList',
  'checklist',
  'table',
  'hr',
  'codeBlock',
  'equation',
  'video',
  'twitter',
];

const editorRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

let editor = null;

onMounted(() => {
  if (editor) {
    editor.unmount();
  }
  (async () => {
    const { createDefaultEditor } = await import('/src/default-editor');
    editor = createDefaultEditor({
      editorRoot: contentRef.value,
      toolbarRoot: toolbarRef.value,
      toolbarItems,
      value: data.value,
      slashItems,
    });
    editorRef.value.style.display = 'block';
  })();
  document.body.style.backgroundColor = '#0000000d';
});
onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
  }
  document.body.style.backgroundColor = '';
});
</script>

<div class="vp-raw">
  <div :class="$style.editor" ref="editorRef" style="display: none;">
    <div :class="$style.toolbar" ref="toolbarRef"></div>
    <div :class="$style.content" ref="contentRef"></div>
  </div>
</div>

<style module>
.editor {
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  max-width: none;
  min-width: 300px;
}
.toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 550px;
  padding: 6px 0;
  border-bottom: 1px solid var(--lake-border-color);
  background-color: var(--lake-background-color);
  z-index: 1;
}
.content {
  margin: 84px auto 28px auto;
  min-width: 550px;
  max-width: 1000px;
  border: 1px solid var(--lake-border-color);
  background-color: var(--lake-background-color);
}
.content :global .lake-container {
  height: auto;
  min-height: 800px;
}
</style>
