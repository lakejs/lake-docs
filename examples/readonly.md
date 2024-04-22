---
layout: example
title: Read-only mode
---

<script setup>
import { ref, onMounted } from 'vue';

const contentRef = ref(null);

onMounted(() => {
  import('lakelib').then(module => {
    new module.Editor({
      root: contentRef.value,
      value: window.defaultValue || '',
      readonly: true,
    }).render();
  });
});
</script>

<div ref="contentRef"></div>
