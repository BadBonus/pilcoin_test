import { useStoreUser } from "@/store/storeUser";

export default async ({ name: namePage }) => {
  if (process.server) return;

  const store = useStoreUser();
  const acessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("RefreshToken");

  if (!store.getUser && namePage !== "index") {
    return await navigateTo("/");
  }
};
