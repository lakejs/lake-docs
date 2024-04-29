---
layout: example
title: Default configuration
---

This example shows you the display of the Lake via the default config. For setting your specified config, please refer to other examples.

<script setup>
import { data } from '../assets/values/default-value.data.js';

const rootStyle = {
  height: '500px',
  overflow: 'auto',
};
</script>

<DefaultEditor :value="data.value" :rootStyle="rootStyle" />
