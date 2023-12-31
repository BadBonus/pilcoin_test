interface IUser {
  balance: string,
  bonus_balance: string,
  email: string,
  firstname: string,
  lastname: string,
  middlename: string,
  nickname: string,
  recover_start: any,
  recover_token: any,
  ref_percent: number,
  referalUid: string,
  role: IUserRole,
}

interface IUserRole {
  name: string,
  permissions: Array<IPermission>,
  status: string
}

interface IPermission {
  action: string,
  id: number,
  object: Object
}


export const useStoreUser = defineStore('storeUser', {
  state: (): {user: null | IUser} => ({
    user: null
  }),

  getters: {
    getUser: (state) => state.user ?? null,
    getUserForProfile: (state) => {
      let profile = null;
      if (state.user) {
        const {
          balance,
          bonus_balance,
          email,
          firstname,
          lastname,
          middlename,
          nickname,
          ref_percent,
          referalUid
        } = state.user;

        profile = {
          balance,
          bonus_balance,
          email,
          firstname,
          lastname,
          middlename,
          nickname,
          ref_percent,
          referalUid
        }
      }

      return profile;
    },
    getAllBalance: ({user}) => ({
      balance: user?.balance,
      bonus_balance: user?.bonus_balance
    }),
    getName: ({user}) => {
      if (user) return user.nickname ?? user.firstname + user.lastname;
      return null;
    },
    getPermissions: ({user}) => user?.role.permissions.reduce((acc: {[key: number]: string}, cur) => {
      acc[cur.id] = cur.action;
      return acc;
    }, {})
  },

  actions: {
    setUser(data: IUser) {
      this.user = data
    },
    setUserInfo(data: IUser) {
      this.user = {...data};
    },
    clearStore() {
      this.user = null
    },
    async loadUserInfo() {
      const {data} = await over_useFetch(auth_info_url);
      this.setUserInfo(data.value);
      return data.value;
    }
  },
})