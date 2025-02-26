<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dropdownRef = ref(null);

const props = defineProps(['name', 'defaultValue', 'tooltip', 'iconName', 'width', 'menuType', 'menuItems']);

let dropdown = null;

onMounted(() => {
  (async () => {
    const { query, icons, Dropdown } = await import('lakelib');
    dropdown = new Dropdown({
      root: query(dropdownRef.value),
      name: props.name,
      downIcon: icons.get('down'),
      defaultValue: props.defaultValue,
      icon: props.iconName ? icons.get(props.iconName) : undefined,
      tooltip: props.tooltip,
      width: props.width,
      menuType: props.menuType,
      menuItems: props.menuItems,
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
  <div :class="$style.dropdown" ref="dropdownRef"></div>
</template>

<style module>
.dropdown {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  line-height: 0;
}
.dropdown :global .lake-dropdown button.lake-dropdown-title {
  border: 1px solid var(--lake-border-color);
}
</style>
