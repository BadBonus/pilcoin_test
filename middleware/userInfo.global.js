import { useStoreUser } from "@/store/storeUser";

export default async ({ name: namePage }) => {
  if (process.server) return;

  const store = useStoreUser();

  if (namePage !== "index" && store.getUser === null) {
    const { data } = await over_useFetch(auth_info_url);
    store.setUserInfo(data.value);
  }
};
