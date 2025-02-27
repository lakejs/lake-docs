---
layout: example
title: Huge content
---

# {{ $frontmatter.title }}

This example shows how the editor performs when handling huge amounts of content. You can also try pasting huge content from elsewhere.

<script setup>
import { data } from '../assets/values/huge-value.data.js';
</script>

<DefaultEditor :value="data.value" />
