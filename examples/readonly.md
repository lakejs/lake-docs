---
layout: doc
title: Read-only mode
---

# {{ $frontmatter.title }}

Read-only mode is used to display the editor's content in the view page. You can enable read-only by setting the config [readonly](/reference/editor-config.md#readonly) to `true`.

<script setup>
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
