import { useToast } from "vue-toastification";

export const over_useFetch = (url, options) => {
  const config = useRuntimeConfig();
  const token = getUserToken();
  const toast = useToast();
  const router = useRouter();

  if (process.server) {
    return;
  }

  const defaultOptions = {
    baseURL: base_api ?? undefined,
    headers: token ? { Authorization: `Bearer ${token}` } : {},

    onResponseError({ request, response, options }) {
      if (response.status === 401) {
        toast.error(response.statusText);

        return router.push({ path: "/" });
      } else {
        toast.error(response.statusText + ": " + response?._data.message[0]);
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
