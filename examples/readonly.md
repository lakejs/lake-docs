---
layout: doc
title: Read-only mode
---

# {{ $frontmatter.title }}

Read-only mode is used to display the editor's content in your view page.

<script setup>
import 'lakelib/lib/lake.css';
import { ref, onMounted } from 'vue';
import { data } from '../assets/values/default-value.data.js';

const contentRef = ref(null);

onMounted(() => {
  (async () => {
    window.LakeCodeMirror = await import('lake-codemirror');
    const { Editor } = await import('lakelib');
    new Editor({
      root: contentRef.value,
      value: data.value,
      readonly: true,
    }).render();
  })();
});
</script>

<div class="vp-raw">
  <div ref="contentRef"></div>
</div>
