<template>
  <div class="vp-raw">
    <div :class="$style.header">
      <h1>{{ $frontmatter.title }}</h1>
    </div>
    <div :class="$style.main">
      <Content />
    </div>
  </div>
</template>

<style module>
.header {
  padding: 32px 32px 16px;
  max-width: 1000px;
  margin: 0 auto;
}
.header :global h1 {
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 32px;
  font-weight: 600;
}
.main {
  box-sizing: border-box;
  padding: 16px 32px;
  margin: 0 auto;
  max-width: 1000px;
}
</style>
