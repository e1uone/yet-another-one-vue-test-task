<template>
  <div class="base-layout flex flex-column">
    <BaseHeader />
    <main class="base-layout__page-container flex-grow flex">
      <slot name="default">
        <DashboardPage class="flex-grow" />
      </slot>
    </main>
  </div>
</template>

<script setup lang="ts">
  import BaseHeader from "@/components/BaseHeader.vue";
  import DashboardPage from "@/pages/DashboardPage.vue";
</script>

<style lang="scss" scoped>
  .base-layout {
    min-height: 100vh;
    background-color: #fbfbfb;
    padding: 41px 50px 58px 50px;

    &__page-container {
      margin-top: 35px;
    }
  }
</style>
