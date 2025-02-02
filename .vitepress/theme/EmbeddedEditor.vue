<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const editorRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

const props = defineProps(['lang', 'value', 'toolbar', 'slash']);

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
      toolbarItems: props.toolbar,
      value: props.value,
      lang: props.lang,
      slashItems: props.slash,
    });
    editorRef.value.style.visibility = 'visible';
    editorRef.value.style.height = '';
  })();
});

onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
  }
});
</script>

<template>
  <div class="vp-raw" ref="editorRef" style="visibility: hidden; height: 208px;">
    <div :class="$style.toolbar" ref="toolbarRef"></div>
    <div :class="$style.content" ref="contentRef"></div>
  </div>
</template>

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
  max-height: 200px;
  overflow: auto;
}
</style>
