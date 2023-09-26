<template>
  <BasePreloader v-model="isPreloaderShown" />
  <BaseLayout v-if="!isPreloaderShown" />
</template>

<script setup lang="ts">
  import BaseLayout from "@/layouts/BaseLayout.vue";
  import BasePreloader from "./components/BasePreloader.vue";
  import { useDocumentsStore } from "@/stores/documents";
  import { onMounted, ref } from "vue";

  const { getDocuments } = useDocumentsStore();

  const isPreloaderShown = ref(true);

  async function initializeApp() {
    try {
      isPreloaderShown.value = true;
      await getDocuments();
    } finally {
      isPreloaderShown.value = false;
    }
  }

  onMounted(() => {
    initializeApp();
  });
</script>

<style scoped lang="scss"></style>
