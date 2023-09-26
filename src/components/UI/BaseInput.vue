<script setup lang="ts">
  const props = defineProps<{
    modelValue: string;
    loading?: boolean;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", payload: string): void;
  }>();
</script>

<template>
  <input
    class="base-input"
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss" scoped>
  @use "src/styles/abstract/colors.scss" as *;

  .base-input {
    border-radius: 8px;
    padding: 16px 24px 16px 24px;
    border: 1.5px #e9ecef solid;
    &:focus,
    &:focus-visible {
      outline: 2px solid $secondary;
    }
  }
</style>
