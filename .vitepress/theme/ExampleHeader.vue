<script setup>
import 'lakelib/lib/lake.css';
import { ref, onMounted, onUnmounted } from 'vue';

const languageMenuItems = [
  {
    value: 'en-US',
    text: 'English',
  },
  {
    value: 'zh-CN',
    text: '简体中文',
  },
  {
    value: 'ja',
    text: '日本語',
  },
  {
    value: 'ko',
    text: '한국어',
  },
];

const directionMenuItems = [
  {
    value: 'ltr',
    text: 'Left to Right',
  },
  {
    value: 'rtl',
    text: 'Right to Left',
  },
];

const languageRef = ref(null);
const directionRef = ref(null);
const mainRef = ref(null);

onMounted(() => {
  import('lakelib').then(module => {
    const { Editor, Utils, Dropdown } = module;
    const { query, safeTemplate } = Utils;
    window.Editor = Editor;
    function renderLanguage() {
      const localStorageKey = 'lake-example-language';
      const root = query(languageRef.value);
      root.empty();
      const languageDropdown = new Dropdown({
        root,
        name: 'language',
        icon: '<img src="/assets/icons/globe.svg" />',
        defaultValue: localStorage.getItem(localStorageKey) ?? 'en-US',
        tooltip: 'Select language',
        width: 'auto',
        menuType: 'list',
        menuItems: languageMenuItems,
        onSelect: value => {
          localStorage.setItem(localStorageKey, value);
          window.location.reload();
        },
      });
      languageDropdown.render();
    }

    function renderDirection() {
      const localStorageKey = 'lake-example-direction';
      const root = query(directionRef.value);
      root.empty();
      const directionDropdown = new Dropdown({
        root,
        name: 'direction',
        icon: '<img src="/assets/icons/direction.svg" />',
        defaultValue: localStorage.getItem(localStorageKey) ?? 'en-US',
        tooltip: 'Select writing direction',
        width: 'auto',
        menuType: 'list',
        menuItems: directionMenuItems,
        onSelect: value => {
          localStorage.setItem(localStorageKey, value);
          window.location.reload();
        },
      });
      directionDropdown.render();
    }

    renderLanguage();
    renderDirection();
  });
});
</script>

<template>
  <div :class="$style.header">
    <h1 :class="$style.title">{{ $frontmatter.title }}</h1>
    <div class="lake-custom-properties" ref="languageRef"></div>
    <div class="lake-custom-properties" ref="directionRef"></div>
  </div>
</template>

<style module>
.header {
  display: grid;
  grid-template-columns: 1fr 38px 36px;
  align-items: center;
  padding: 16px 8px;
  height: 68px;
}
.header :global .lake-dropdown .lake-dropdown-icon img {
  width: 24px;
  height: 24px;
}
.header :global .lake-dropdown .lake-dropdown-menu {
  top: 36px;
}
.title {
  margin: 0;
  font-size: 18px;
}
</style>
