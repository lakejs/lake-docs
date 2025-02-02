<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dropdownRef = ref(null);

let dropdown = null;

onMounted(() => {
  (async () => {
    const { query, icons, Dropdown } = await import('lakelib');
    dropdown = new Dropdown({
      root: query(dropdownRef.value),
      name: 'langType',
      downIcon: icons.get('down'),
      defaultValue: 'html',
      tooltip: 'Select language',
      location: 'global',
      menuType: 'list',
      menuItems: [
        { value: 'text', text: 'Plain text' },
        { value: 'css', text: 'CSS' },
        { value: 'html', text: 'HTML' },
        { value: 'javascript', text: 'JavaScript' },
      ],
      onSelect: value => {
        console.log(value);
      },
    });
    dropdown.render();
  })();
});

onUnmounted(() => {
  if (dropdown) {
    dropdown.unmount();
    dropdown = null;
  }
});
</script>

<template>
  <div class="lake-button-root" ref="dropdownRef" style="display: inline-block; margin-right: 10px; vertical-align: middle;"></div>
</template>
