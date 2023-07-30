import {useStoreUser} from "@/store/storeUser";

interface IPermissionsUser {
  can_bet: number,
  can_create_comment: number,
  can_read_news: number,
  can_delete_comment: number,
  can_order_shop: number,
}

interface IPagesNames {
  cabinet: Array<number>,
  index: Array<number>,
  main: Array<number>,
  news: Array<number>,
  "tournament-slug": Array<number>
};

export const permissions: IPermissionsUser = {
  "can_bet": 10,
  "can_create_comment": 15,
  "can_read_news": 37,
  "can_delete_comment": 56,
  "can_order_shop": 11
};

// В теории можно автоматизировать отдельным скриптом сбор данных по текущим страницам в каталоге Pages
const pagesAllowedOnly: IPagesNames = {
  news: [37],
}

export const per_isAllowed = (idOfneedePermission: number): string | boolean => {
  if (process.server) return;

  const store = useStoreUser();
  return store.getPermissions ? store.getPermissions[idOfneedePermission] : false;
}
export const perPage_isAllowed = (pageName) => {
  if (process.server) return;

  const store = useStoreUser();
  let isAllowed = false;

  if (pagesAllowedOnly[pageName]) {
    const onlyRights = pagesAllowedOnly[pageName].length ? pagesAllowedOnly[pageName] : null;
    if (onlyRights) {
      isAllowed = onlyRights.some((element: number) => store.getPermissions[element]);
    }
  }
  else {
    isAllowed = true;
  }

  return isAllowed
};
