import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Access baseURL universally
  const defaultUrl = config.public.apiBase

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
