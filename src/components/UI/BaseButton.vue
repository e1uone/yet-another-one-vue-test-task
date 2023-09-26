<script setup lang="ts">
  import { computed } from "vue";
  const props = defineProps<{
    color: string;
  }>();

  const btnClasses = computed(() => {
    return { [`text-${props.color}`]: true };
  });
</script>

<template>
  <button :class="btnClasses" class="base-button">
    <slot name="default" />
  </button>
</template>

<style lang="scss" scoped>
  @use "src/styles/abstract/colors.scss" as *;
  .base-button {
    border-radius: 8px;
    padding: 7px 27px;
    border: 1px currentColor solid;
    background-color: white;
    cursor: pointer;

    &:focus,
    &:focus-visible {
      outline: 2px solid $secondary;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #fbfbfb;
      color: #6c757d;
    }
  }
</style>
