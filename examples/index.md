---
layout: example
title: Default configuration
---

This example shows you the display of the Lake using the default configuration. For details on setting specific configurations, please refer to other examples or see the [reference](/reference/).

<script setup>
import { data } from '../assets/values/default-value.data.js';

const rootStyle = {
  height: '500px',
  overflow: 'auto',
};
</script>

<DefaultEditor :value="data.value" :rootStyle="rootStyle" />
