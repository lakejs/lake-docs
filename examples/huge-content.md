---
layout: example
title: Huge content
---

<script setup>
import { data } from '../assets/values/huge-value.data.js';

const rootStyle = {
  height: '550px',
  overflow: 'auto',
};
</script>

<DefaultEditor :value="data.value" :rootStyle="rootStyle" />
