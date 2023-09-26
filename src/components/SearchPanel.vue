<script lang="ts" setup>
  import { debounce } from "@/utils/debounce";
  import DocumentCard from "@/components/DocumentCard.vue";
  import { ref } from "vue";
  import { useDocumentsStore } from "@/stores/documents";
  import type { UserDocument } from "@/types/DocumentsTypes";

  const emit = defineEmits<{
    (event: "openDocument", payload: UserDocument): void;
  }>();

  const documentsStore = useDocumentsStore();
  const nameSearch = ref("");

  const getDocumentsDebounce = debounce(documentsStore.getDocuments, 1000);
</script>

<template>
  <div class="search-panel flex flex-column">
    <label for="search-input" class="text-body-1 d-block search-panel__search-label">
      Поиск документа
    </label>
    <BaseInput
      id="search-input"
      v-model="nameSearch"
      :loading="documentsStore.isDocsLoading"
      class="search-panel__search-input full-width"
      type="text"
      placeholder="Введите ID документа"
      @update:model-value="getDocumentsDebounce($event)"
    />
    <div class="search-panel__result-block flex flex-column flex-grow">
      <span class="text-body-1 d-block">Результаты</span>

      <div
        v-if="documentsStore.isDocsLoading === true"
        class="search-panel__spinner-wrapper flex flex-center"
      >
        <BaseSpinner />
      </div>

      <span
        v-if="documentsStore.isDocsLoading === false && documentsStore.documents.length === 0"
        class="text-body-2 search-panel__nothing-found d-block"
      >
        По вашему запросу ничего не найдено, или у вас отсутствуют документы
      </span>
      <template
        v-if="documentsStore.isDocsLoading === false && documentsStore.documents.length > 0"
      >
        <DocumentCard
          v-for="document in documentsStore.documents"
          :key="document.id"
          class="search-panel__result-document-card"
          :document="document"
          @click="emit('openDocument', document)"
        >
          {{ document.name }}
        </DocumentCard>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search-panel {
    background-color: #fdfdfd;
    padding: 27px 22px 60px 20px;
    &__search-input {
      margin-top: 14px;
    }
    &__result-block {
      margin-top: 29px;
    }
    &__result-document-card {
      margin-top: 18px;
    }
    &__nothing-found {
      margin-top: 14px;
      height: 70px;
    }
    &__spinner-wrapper {
      margin-top: 14px;
      min-height: 70px;
      height: 100%;
    }
  }
</style>
