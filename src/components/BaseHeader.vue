<script lang="ts" setup>
  const appTitle: string = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <header class="header flex justify-between items-center">
    <h1 class="header__app-title">
      {{ appTitle }}
    </h1>
    <div class="header__username">Username</div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    &__app-title {
      font-size: 32px;
      font-weight: 700;
      line-height: 39px;
    }
    &__username {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }
</style>
