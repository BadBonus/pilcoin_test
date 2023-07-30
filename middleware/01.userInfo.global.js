import { useStoreUser } from "@/store/storeUser";

export default async ({ name: namePage }) => {
  if (process.server) return;

  const store = useStoreUser();

  if (namePage !== "index" && store.getUser === null) {
    store.loadUserInfo();
  }
};
