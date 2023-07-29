import { useStoreUser } from "@/store/storeUser";

export default async ({ name: namePage }) => {
  if (process.server) return;

  const store = useStoreUser();

  if (!store.getUser && namePage !== "index") {
    return await navigateTo("/");
  }
};
