<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const buttonRef = ref(null);

const props = defineProps(['name', 'type', 'iconName', 'icon', 'text', 'tooltip', 'tabIndex']);

let button = null;

onMounted(() => {
  (async () => {
    const { query, icons, Button } = await import('lakelib');
    button = new Button({
      root: query(buttonRef.value),
      name: props.name,
      type: props.type,
      icon: props.iconName ? icons.get(props.iconName) : props.icon,
      text: props.text,
      tooltip: props.tooltip,
      tabIndex: props.tabIndex,
      onClick: () => {
        console.log('clicked');
      },
    });
    button.render();
  })();
});

onUnmounted(() => {
  if (button) {
    button.node.remove();
    button = null;
  }
});
</script>

<template>
  <div class="lake-button-root" ref="buttonRef" style="display: inline-block; margin-right: 10px; vertical-align: middle;"></div>
</template>
