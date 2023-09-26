<script lang="ts" setup>
  import type { UserDocument } from "@/types/DocumentsTypes";

  const missingImageSvg = new URL("@/assets/svg/missing-image.svg", import.meta.url).href;

  defineProps<{
    document: UserDocument;
  }>();
</script>

<template>
  <div class="document-card flex">
    <img
      :src="document.image || missingImageSvg"
      class="document-card__image"
      alt="document-image"
    />
    <div class="flex full-width flex-column justify-center document-card__content">
      <span class="document-card__title">{{ document.name }}</span>
      <span class="document-card__size">{{ "12 MB" }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .document-card {
    box-shadow: 0px 0px 10px 0px #0000001a;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    &__content {
      padding: 15px;
    }
    &__image {
      min-width: 70px;
      width: 70px;
      height: 70px;
    }
    &__title {
      font-weight: 600;
    }
    &__size {
      margin-top: 8px;
      color: #6c757d;
    }
  }
</style>
