<template>
  <div :class="$style.main" class="vp-doc">
    <Content />
  </div>
</template>

<style module>
.main {
  box-sizing: border-box;
  padding: 48px 32px;
  margin: 0 auto;
  max-width: 1000px;
}
@media (max-width: 960px) {
  .header {
    padding: 32px 16px 0;
  }
  .main {
    padding: 16px;
  }
}
</style>
