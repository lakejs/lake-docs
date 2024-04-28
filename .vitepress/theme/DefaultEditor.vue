<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const loadingRef = ref(null);
const editorRef = ref(null);
const toolbarRef = ref(null);
const contentRef = ref(null);

const props = defineProps(['lang', 'value', 'toolbar', 'rootStyle']);

let editor = null;

const timeoutId = window.setTimeout(() => {
  loadingRef.value.style.display = 'block';
}, 1000);

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
      value: props.value || '<p><br /></p>',
      image: {
        requestMethod: 'GET',
        requestAction: '/assets/json/upload-image.json',
      },
    });
    if (props.rootStyle) {
      editor.root.css(props.rootStyle);
    }
    editor.render();
    window.clearTimeout(timeoutId);
    loadingRef.value.style.display = 'none';
    editorRef.value.style.display = 'block';
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
  <div :class="$style.loading" ref="loadingRef">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path></svg>
  </div>
  <div class="vp-raw" ref="editorRef" style="display: none;">
    <div :class="$style.toolbar" ref="toolbarRef"></div>
    <div :class="$style.content" ref="contentRef"></div>
  </div>
</template>

<style module>
@keyframes lakeRotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  padding-top: 64px;
  text-align: center;
  display: none;
}
.loading svg {
  display: inline;
  animation: lakeRotate 1s linear 0s infinite normal none;
}
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
