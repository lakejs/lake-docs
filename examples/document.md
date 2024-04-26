---
layout: false
title: Document editor
---

<script setup>
import 'lakelib/lib/lake.css';
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

const editorRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

let editor = null;

onMounted(() => {
  if (editor) {
    editor.unmount();
  }
  (async () => {
    window.LakeCodeMirror = await import('lake-codemirror');
    const { Editor, Toolbar } = await import('lakelib');
    const toolbar = new Toolbar({
      root: toolbarRef.value,
      items: toolbarItems,
    });
    editor = new Editor({
      root: contentRef.value,
      toolbar,
      value: data.value,
      image: {
        requestMethod: 'GET',
        requestAction: '/assets/json/upload-image.json',
      },
    });
    editor.render();
    editorRef.value.style.visibility = 'visible';
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
  <div :class="$style.editor" ref="editorRef" style="visibility: hidden;">
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
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 1;
}
.content {
  height: auto;
  min-height: 800px;
  overflow: visible;
  margin: 84px auto 28px auto;
  min-width: 550px;
  max-width: 1000px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
}
</style>
