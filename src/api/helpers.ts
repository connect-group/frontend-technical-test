import { ApiUrl } from "@types";

export async function request<K extends keyof ApiUrl>(apiUrl: K) {
  const response = await fetch(apiUrl);
  const result = await response.json();
  return result as ApiUrl[K];
}
