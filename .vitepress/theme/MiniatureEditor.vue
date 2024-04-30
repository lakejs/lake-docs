<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const editorRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

const props = defineProps(['lang', 'value', 'placeholder']);

let editor = null;

onMounted(() => {
  if (editor) {
    editor.unmount();
  }
  (async () => {
    const { createMiniatureEditor } = await import('/src/miniature-editor');
    editor = createMiniatureEditor({
      editorRoot: contentRef.value,
      toolbarRoot: toolbarRef.value,
      placeholder: props.placeholder,
      lang: props.lang,
      value: props.value,
    });
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

<template>
  <div :class="$style.editor" class="vp-raw" ref="editorRef" style="visibility: hidden;">
    <div :class="$style.toolbar" ref="toolbarRef"></div>
    <div :class="$style.content" ref="contentRef"></div>
  </div>
</template>

<style module>
.editor {
  box-sizing: border-box;
}
.editor :global .lake-container {
  padding: 8px 12px;
}
.toolbar {
  border: 1px solid #d9d9d9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: none;
}
.toolbar :global .lake-color-dropdown-menu {
  width: 156px;
}
.toolbar :global .lake-color-dropdown-menu li:first-child .lake-dropdown-menu-text {
  text-align: center;
}
.content {
  border: 1px solid #d9d9d9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 100px;
  overflow: auto;
  outline-offset: -2px;
}
</style>
