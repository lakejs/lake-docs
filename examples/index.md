---
layout: example
title: Feature-rich editor
---

# {{ $frontmatter.title }}

This example shows most of the available features. If you want to learn how to install Lake, see the [Getting started](/guide/) page.

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
  'media',
  'file',
  'emoji',
  'specialCharacter',
  'codeBlock',
  'equation',
  'video',
  'twitter',
  'table',
  'blockQuote',
  'paragraph',
  'hr',
  '|',
  'selectAll',
];
const slashItems = [
  'image',
  'media',
  'file',
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'paragraph',
  'blockQuote',
  'numberedList',
  'bulletedList',
  'checklist',
  'table',
  'infoAlert',
  'tipAlert',
  'warningAlert',
  'dangerAlert',
  'hr',
  'codeBlock',
  'equation',
  'video',
  'twitter',
];
</script>

<DefaultEditor :toolbar="toolbarItems" :value="data.value" :slash="slashItems" />
