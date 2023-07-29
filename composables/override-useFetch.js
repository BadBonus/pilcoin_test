import { useToast } from "vue-toastification";

export const over_useFetch = (url, options) => {
  const config = useRuntimeConfig();
  const token = getUserToken();
  const toast = useToast();

  console.log("start");

  if (process.server) {
    return;
  }
  console.log("mid");

  const defaultOptions = {
    baseURL: config.public.API_BASIC_URL ?? undefined,
    headers: token ? { Authorization: `Bearer ${token}` } : {},

    onResponseError({ request, response, options }) {
      if (response.status === 401) {
        toast.error(response.statusText);
      }
    },

    onRequestError({ request, options, error }) {
      console.log("onRequestError");
      // if (error.value) {
      //   console.log(error.value);
      //   toast.error(error.value);
    },
    ...options,
  };

  return useFetch(url, defaultOptions);
};
