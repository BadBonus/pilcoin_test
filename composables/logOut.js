import { useStoreUser } from "@/store/storeUser";
import { useStoreTournaments } from "@/store/storeTournaments";

export const logOut = () => {
  const storeUser = useStoreUser();
  const storeTournaments = useStoreTournaments();

  clearUserTokens();
  storeUser.clearStore();
  storeTournaments.clearStore();
  return navigateTo("/");
};
