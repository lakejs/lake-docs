<script setup>
import { ref, onMounted } from 'vue';
import ExampleHeader from './ExampleHeader.vue';

const mainRef = ref(null);

onMounted(() => {
  window.LAKE_LANGUAGE = localStorage.getItem('lake-example-language') ?? 'en-US';
  mainRef.value.dir = localStorage.getItem('lake-example-direction') ?? 'ltr';
});
</script>

<template>
  <div class="vp-raw">
    <div :class="$style.headerWrapper">
      <ExampleHeader />
    </div>
    <div :class="$style.main" ref="mainRef">
      <Content />
    </div>
  </div>
</template>

<style module>
.headerWrapper {
  max-width: 1000px;
  margin: 0 auto;
}
.main {
  box-sizing: border-box;
  padding: 0 8px 32px 8px;
  margin: 0 auto;
  max-width: 1000px;
}
</style>
