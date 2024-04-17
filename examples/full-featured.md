# Full-featured editor

This page demonstrates all of the built-in features.

<script setup>
import 'lakelib/lib/lake.css';
import { onMounted } from 'vue';
import { Editor, Toolbar } from 'lakelib';
import * as CodeMirror from 'lake-codemirror';

window.CodeMirror = CodeMirror;

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
  'italic',
  'underline',
  'strikethrough',
  'superscript',
  'subscript',
  'code',
  'moreStyle',
  '|',
  'fontColor',
  'highlight',
  '|',
  'list',
  'numberedList',
  'bulletedList',
  'checklist',
  '|',
  'align',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'alignJustify',
  '|',
  'indent',
  'increaseIndent',
  'decreaseIndent',
  '|',
  'image',
  'link',
  'codeBlock',
  'blockQuote',
  'paragraph',
  'hr',
  '|',
  'selectAll',
];

onMounted(() => {
  const toolbar = new Toolbar({
    root: '#toolbar',
    items: toolbarItems,
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
