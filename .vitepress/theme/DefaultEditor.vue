<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const editorRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

const props = defineProps(['lang', 'value', 'toolbar', 'rootStyle']);

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
      items: props.toolbar,
    });
    editor = new Editor({
      root: contentRef.value,
      toolbar,
      lang: props.lang || 'en-US',
      value: props.value || '<p><br /><focus /></p>',
      image: {
        requestMethod: 'GET',
        requestAction: '/assets/json/upload-image.json',
      },
    });
    if (props.rootStyle) {
      editor.root.css(props.rootStyle);
    }
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

<template>
  <div class="vp-raw" ref="editorRef" style="visibility: hidden;">
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
}
</style>
