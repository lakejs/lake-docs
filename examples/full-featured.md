---
layout: example
title: Full-featured editor
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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

const toolbarRef = ref(null);
const contentRef = ref(null);

let editor = null;

onMounted(() => {
  if (editor) {
    editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor, Toolbar } = module;
    const toolbar = new Toolbar({
      root: toolbarRef.value,
      items: toolbarItems,
    });
    editor = new Editor({
      root: contentRef.value,
      toolbar,
      value: window.defaultValue || '',
      image: {
        requestMethod: 'GET',
        requestAction: '/assets/json/upload-image.json',
      },
    });
    editor.render();
  });
});
onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
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
