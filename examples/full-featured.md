---
layout: example
title: Full-featured toolbar
---

This example demonstrates most of the Lake features. To add a button that you need, see the [toolbar config](/reference/toolbar-config.md).

<script setup>
import { data } from '../assets/values/default-value.data.js';

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
  '|',
  'fontColor',
  'highlight',
  '|',
  'numberedList',
  'bulletedList',
  'checklist',
  '|',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'alignJustify',
  '|',
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
const rootStyle = {
  height: '500px',
  overflow: 'auto',
};
</script>

<DefaultEditor :toolbar="toolbarItems" :value="data.value" :rootStyle="rootStyle" />
