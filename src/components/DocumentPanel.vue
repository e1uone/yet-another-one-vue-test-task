<script lang="ts" setup>
  import type { UserDocument } from "@/types/DocumentsTypes";
  import { downloadFileFromString } from "@/utils/download";
  const missingImageSvg = new URL("@/assets/svg/missing-image-2.svg", import.meta.url).href;

  defineProps<{
    document: UserDocument | null;
  }>();
</script>
<template>
  <div class="document-panel">
    <span
      v-if="!document"
      class="document-panel__no-document-provided flex flex-center full-height"
    >
      Выберите документ, чтобы посмотреть его содержимое
    </span>

    <div v-else class="document-panel__content flex">
      <div class="document-panel__image-wrapper">
        <img
          :src="document.image || missingImageSvg"
          class="document-panel__image"
          alt="document-image"
        />
      </div>
      <div>
        <span class="d-block text-body-1 document-panel__title">{{ document.name }}</span>
        <div class="document-panel__btns">
          <BaseButton
            color="secondary"
            @click="downloadFileFromString(document.name, document.description)"
          >
            Скачать
          </BaseButton>
          <BaseButton :disabled="!document.image" color="negative">Удалить</BaseButton>
        </div>
        <span class="d-block text-body-1">Описание</span>
        <p class="document-panel__description">
          {{ document.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .document-panel {
    padding: 30px;
    &__no-document-provided {
      color: #6c757d;
    }
    &__image-wrapper {
      flex-shrink: 0;
      width: 100%;

      @include gt-sm {
        width: 210px;
        margin-right: 60px;
      }
      @include gt-md {
        width: 420px;
      }
    }
    &__image {
      border: 1px #e0e0e0 solid;
      height: auto;
      width: 100%;
    }
    &__content {
      flex-direction: column;
      @include gt-sm {
        flex-direction: row;
      }
    }
    &__title {
      margin-top: 47px;
      margin-bottom: 14px;

      @include gt-sm {
        flex-direction: row;
        margin-top: 0px;
      }
    }
    &__btns {
      margin-bottom: 47px;
      > :first-child {
        margin-right: 17px;
      }
    }
    &__description {
      margin-top: 14px;
      color: #6c757d;
    }
  }
</style>
