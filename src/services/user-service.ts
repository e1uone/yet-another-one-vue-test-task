import { createApi } from "./api";

const userService = createApi("user");

export async function getUserDocs(nameFilter?: string) {
  return userService.get("docs", nameFilter ? { search: nameFilter } : undefined);
}
