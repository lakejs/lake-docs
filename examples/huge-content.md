---
layout: example
title: Huge content
---

This example demonstrates how the editor performs when handling huge amounts of content. You can also try pasting huge amounts of content from elsewhere.

<script setup>
import { data } from '../assets/values/huge-value.data.js';
</script>

<DefaultEditor :value="data.value" />
