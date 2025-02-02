<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const buttonRef = ref(null);

const props = defineProps(['name', 'type', 'iconName', 'text', 'tooltip']);

let button = null;

onMounted(() => {
  (async () => {
    const { query, icons, Button } = await import('lakelib');
    button = new Button({
      root: query(buttonRef.value),
      name: props.name,
      type: props.type,
      icon: props.iconName ? icons.get(props.iconName) : undefined,
      text: props.text,
      tooltip: props.tooltip,
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
  <div :class="$style.button" ref="buttonRef"></div>
</template>

<style module>
.button {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  line-height: 0;
}
</style>
