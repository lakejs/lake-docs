---
layout: example
title: Default config
---

This example shows how the editor displays using the default config. For specific configurations, see other examples or the [reference](/reference/).

<script setup>
import { data } from '../assets/values/default-value.data.js';
</script>

<DefaultEditor :value="data.value" />
