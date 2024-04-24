---
layout: example
title: Read-only mode
---

<script setup>
import { ref, onMounted } from 'vue';
import { data } from '../assets/values/default-value.data.js';

const contentRef = ref(null);

onMounted(() => {
  import('lakelib').then(module => {
    new module.Editor({
      root: contentRef.value,
      value: data.value,
      readonly: true,
    }).render();
  });
});
</script>

<div ref="contentRef"></div>
