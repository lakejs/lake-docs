---
layout: false
title: Document editor
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ExampleHeader from '../.vitepress/theme/ExampleHeader.vue';

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

<div :class="$style.document" class="vp-raw">
  <div :class="$style.headerWrapper">
    <ExampleHeader />
  </div>
  <div :class="$style.editor" ref="mainRef">
    <div :class="$style.toolbar" ref="toolbarRef"></div>
    <div :class="$style.content" ref="contentRef"></div>
  </div>
</div>

<style module>
.document {
  background-color: #0000000d;
}
.headerWrapper {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.editor {
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  max-width: none;
  min-width: 300px;
}
.toolbar {
  position: fixed;
  top: 60px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-right: none;
}
.content {
  height: auto;
  overflow: visible;
  margin: 110px auto;
  max-width: 1000px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
}
</style>

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
</style>
