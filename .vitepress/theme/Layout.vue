<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { watchPostEffect } from 'vue';

const { isDark } = useData();

const { Layout } = DefaultTheme;

watchPostEffect(() => {
  const classList = document.documentElement.classList;
  if (isDark.value) {
    classList.add('lake-dark');
  } else {
    classList.remove('lake-dark');
  }
});
</script>

<template>
  <Layout />
</template>
