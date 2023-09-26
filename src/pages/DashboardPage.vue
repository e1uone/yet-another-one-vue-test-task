<script setup lang="ts">
  import type { UserDocument } from "@/types/DocumentsTypes";
  import { ref, type Ref } from "vue";
  import SearchPanel from "@/components/SearchPanel.vue";
  import DocumentPanel from "@/components/DocumentPanel.vue";

  const openedDocument: Ref<UserDocument | null> = ref(null);

  function openDocument(document: UserDocument): void {
    openedDocument.value = document;
  }
</script>

<template>
  <div class="dashboard-page flex">
    <SearchPanel class="dashboard-page__search-panel" @open-document="openDocument($event)" />
    <DocumentPanel :document="openedDocument" class="dashboard-page__document-panel" />
  </div>
</template>

<style lang="scss" scoped>
  .dashboard-page {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px #0000001a;
    border-radius: 10px;
    @include gt-sm {
      flex-direction: row;
    }
    &__search-panel {
      border-bottom: 1px solid #e0e0e0;
      @include gt-sm {
        border-bottom: none;
        border-right: 1px solid #e0e0e0;
      }
      flex: 33%;
    }
    &__document-panel {
      @include gt-sm {
        flex: 66%;
      }
    }
  }
</style>
