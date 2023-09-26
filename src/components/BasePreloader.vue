<script setup lang="ts">
  import BaseSpinner from "@/components/UI/BaseSpinner.vue";
  defineProps<{
    modelValue: boolean;
  }>();
</script>
<template>
  <Transition name="fade">
    <div v-if="modelValue" class="base-preloader flex flex-column flex-center">
      <BaseSpinner class="base-preloader__spinner" />

      <span class="text-body-2">Загрузка, пожалуйста подождите</span>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
  .base-preloader {
    user-select: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    background: white;
    width: 100vw;
    height: 100vh;

    &__spinner {
      margin-bottom: 20px;
    }
  }
</style>
