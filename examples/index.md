---
layout: example
title: Default configuration
---

This example demonstrates the features of Lake using the default configuration. For specific configurations, please refer to other examples or see the [reference](/reference/).

<script setup>
import { data } from '../assets/values/default-value.data.js';
</script>

<DefaultEditor :value="data.value" />
