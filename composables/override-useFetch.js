export const over_useFetch = (url, options) => {
  const config = useRuntimeConfig();

  const token = getUserToken();

  if (process.server) {
    return useFetch(url, options);
  }

  const defaultOptions = {
    baseURL: config.public.API_BASIC_URL ?? undefined,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    onResponseError({ request, options, error, response }) {
      if (+response?._data.statusCode > 399) {
        console.log(response?._data.error);
      }
    },
    ...options,
  };

  return useFetch(url, defaultOptions);
};
