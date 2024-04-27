---
layout: example
title: Default toolbar
---

<script setup>
import { data } from '../assets/values/default-value.data.js';

const rootStyle = {
  height: '550px',
  overflow: 'auto',
};
</script>

<DefaultEditor :value="data.value" :rootStyle="rootStyle" />
