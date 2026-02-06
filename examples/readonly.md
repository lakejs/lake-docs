---
layout: example
title: Read-only mode
---

# {{ $frontmatter.title }}

Read-only mode is used to display the editor's content in the view page. You can enable read-only by setting the [readonly](/reference/index.md#readonly) config to `true`.

::: tip
If you need cross-platform display or server-side rendering, you can use [lake-html](https://github.com/lakejs/lake-html) to convert editor data. It supports both Node.js and the browser.
:::

---

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
