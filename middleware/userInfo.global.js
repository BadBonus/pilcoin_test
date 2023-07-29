import { useStoreUser } from "@/store/storeUser";

export default async ({ name: namePage }) => {
  if (process.server) return;
  const store = useStoreUser();

  if (!store.getUser && namePage !== "index") {
    const { data } = await over_useFetch(auth_info_url);

    store.setUserInfo(data.value);
  }
};
