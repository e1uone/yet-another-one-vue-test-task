import type { UserDocument } from "@/types/DocumentsTypes";

import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { getUserDocs } from "@/services/user-service";

export const useDocumentsStore = defineStore("documents", () => {
  const documents: Ref<Array<UserDocument>> = ref([]);
  const isDocsLoading = ref(false);

  async function getDocuments(nameFilter?: string): Promise<Array<UserDocument>> {
    try {
      isDocsLoading.value = true;
      const response = await getUserDocs(nameFilter);
      documents.value = response;
      return response;
    } catch {
      console.log("Error while receiving documents");
      return [];
    } finally {
      isDocsLoading.value = false;
    }
  }

  return { documents, getDocuments, isDocsLoading };
});
