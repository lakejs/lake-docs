# Default configuration

This page demonstrates some of the built-in features that are useful in most situations.

<script setup>
import 'lakelib/lib/lake.css';
import { onMounted } from 'vue';
import { Editor, Toolbar } from 'lakelib';
import * as CodeMirror from 'lake-codemirror';

window.CodeMirror = CodeMirror;

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

<div>
  <div :class="$style.toolbar" id="toolbar">a</div>
  <div :class="$style.content" id="content">b</div>
</div>

<style module>
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
