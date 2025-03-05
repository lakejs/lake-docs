---
layout: false
title: Dark mode
---

<script setup>
import { onMounted } from 'vue';

const defaultValue = `
<h3>Setting the theme to dark mode</h3>
<p>First, add the <code>lake-dark</code> class to the <code>&lt;html&gt;</code> element:</p>
<lake-box type="block" name="codeBlock" value="eyJsYW5nIjoiaHRtbCIsImNvZGUiOiI8aHRtbCBjbGFzcz1cImxha2UtZGFya1wiPiJ9"></lake-box>
<p>If you prefer not to modify the HTML directly, you can add the class dynamically using JavaScript:</p>
<lake-box type="block" name="codeBlock" value="eyJsYW5nIjoiamF2YXNjcmlwdCIsImNvZGUiOiJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFrZS1kYXJrJyk7In0="></lake-box>
<p>Then, set the <code>color</code> and <code>background-color</code> CSS properties for the <code>&lt;body&gt;</code> element:</p>
<lake-box type="block" name="codeBlock" value="eyJsYW5nIjoiY3NzIiwiY29kZSI6ImJvZHkge1xuICBjb2xvcjogdmFyKC0tbGFrZS10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFrZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn0ifQ=="></lake-box>
<p>This will apply the dark mode theme based on the predefined CSS variables.</p>
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
