---
layout: page
sidebar: false
footer: false
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
  'numberedList',
  'bulletedList',
  'checklist',
  '|',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'alignJustify',
  '|',
  'increaseIndent',
  'decreaseIndent',
  '|',
  'image',
  'link',
  'codeBlock',
  'blockQuote',
  'hr',
];

const mainRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

onMounted(() => {
  window.LAKE_LANGUAGE = localStorage.getItem('lake-example-language') ?? 'en-US';
  mainRef.value.dir = localStorage.getItem('lake-example-direction') ?? 'ltr';
  if (window.editor) {
    window.editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor, Toolbar, Utils } = module;
    const toolbar = new Toolbar({
      root: toolbarRef.value,
      items: toolbarItems,
    });
    const editor = new Editor({
      root: contentRef.value,
      toolbar,
      value: data.value,
    });
    editor.render();
    window.editor = editor;
  });
  document.body.style.backgroundColor = '#0000000d';
});
onUnmounted(() => {
  if (window.editor) {
    window.editor.unmount();
    window.editor = null;
  }
  document.body.style.backgroundColor = '';
});
</script>

<div class="vp-raw">
  <div :class="$style.editor" ref="mainRef">
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
  top: 64px;
  width: 100%;
  padding: 6px 0;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 1;
}
.content {
  height: auto;
  min-height: 800px;
  overflow: visible;
  margin: 76px auto 28px auto;
  max-width: 1000px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
}
</style>
