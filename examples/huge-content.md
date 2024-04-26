---
layout: example
title: Huge content
---

<script setup>
import 'lakelib/lib/lake.css';
import { ref, onMounted, onUnmounted } from 'vue';
import { data } from '../assets/values/huge-value.data.js';

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
    });
    editor = new Editor({
      root: contentRef.value,
      toolbar,
      value: data.value,
    });
    editor.render();
    editorRef.value.style.visibility = 'visible';
  })();
});
onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
  }
});
</script>

<div ref="editorRef" style="visibility: hidden;">
  <div :class="$style.toolbar" ref="toolbarRef"></div>
  <div :class="$style.content" ref="contentRef"></div>
</div>

<style module>
.toolbar {
  border: 1px solid #d9d9d9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 0;
}
.content {
  border: 1px solid #d9d9d9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 550px;
  overflow: auto;
}
</style>
