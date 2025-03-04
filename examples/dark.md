---
layout: false
title: Dark mode
---

<script setup>
import { onMounted } from 'vue';

const defaultValue = `
<h3>How to set the theme to dark mode?</h3>
<p><br /></p>
<p>First, add the <code>lake-dark</code> class to the <code>&lt;html&gt;</code> element:</p>
<lake-box type="block" name="codeBlock" value="eyJsYW5nIjoiaHRtbCIsImNvZGUiOiI8aHRtbCBjbGFzcz1cImxha2UtZGFya1wiPiJ9"></lake-box>
<p><br /></p>
<p>Then, set the <code>color</code> and <code>background-color</code> CSS properties for the <code>&lt;body&gt;</code> element:</p>
<lake-box type="block" name="codeBlock" value="eyJsYW5nIjoiY3NzIiwiY29kZSI6ImJvZHkge1xuICBjb2xvcjogdmFyKC0tbGFrZS10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFrZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn0ifQ=="></lake-box>
<p><br /></p>
`;

onMounted(() => {
  document.documentElement.classList.add('lake-dark');
});
</script>

<DefaultEditor :value="defaultValue" />

<style module>
body {
  padding: 16px;
  color: var(--lake-text-color);
  background-color: var(--lake-background-color);
}
</style>
