import { useStoreUser } from "@/store/storeUser";

export default async ({ name: namePage }) => {
  const store = useStoreUser();

  if (store.getUser && namePage !== "index") {
    const { data, error, pending, refresh } = await useFetch(auth_info_url);
  }
};
