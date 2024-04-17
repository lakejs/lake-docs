# Default configuration

This page demonstrates some of the built-in features that are useful in most situations.

<script setup>
import 'lakelib/lib/lake.css';
import { onMounted } from 'vue';
import { Editor, Toolbar } from 'lakelib';

onMounted(() => {
  const toolbar = new Toolbar({
    root: '#toolbar',
  });
  const editor = new Editor({
    root: '#content',
    toolbar,
  });
  editor.render();
});
</script>

<div :class="$style.editor">
  <div :class="$style.toolbar" id="toolbar">a</div>
  <div :class="$style.content" id="content">b</div>
</div>

<style module>
.editor {
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 300px;
}
.toolbar {
  border: 1px solid #d9d9d9;
  border-bottom: 0;
}
.content {
  border: 1px solid #d9d9d9;
  height: 300px;
  overflow: auto;
}
</style>
