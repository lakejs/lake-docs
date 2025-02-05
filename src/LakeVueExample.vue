<script setup>
import 'lakelib/lib/lake.css';
import { Editor, Toolbar } from 'lakelib';
import { useTemplateRef, onMounted, onUnmounted } from 'vue';

const toolbarRef = useTemplateRef('toolbarRef');
const contentRef = useTemplateRef('contentRef');

let editor = null;

onMounted(() => {
  const toolbar = new Toolbar({
    root: toolbarRef.value,
  });
  editor = new Editor({
    root: contentRef.value,
    toolbar,
  });
  editor.render();
  editor.event.on('change', (value) => {
    console.log(value);
  });
});

onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
  }
});
</script>

<template>
  <div class="my-editor">
    <div class="my-toolbar" ref="toolbarRef"></div>
    <div class="my-content" ref="contentRef"></div>
  </div>
</template>
