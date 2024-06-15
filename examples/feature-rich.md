---
layout: example
title: Feature-rich editor
---

This example demonstrates most of the available features. For more information on customizing the toolbar, refer to the [toolbar configuration](/reference/toolbar-config.md).

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
  'link',
  'image',
  'video',
  'file',
  'emoji',
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
