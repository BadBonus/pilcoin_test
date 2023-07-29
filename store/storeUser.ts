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
  role: Object,
}

export const useStoreUser = defineStore('storeUser', {
  state: (): {user: null | IUser} => ({
    user: null
  }),

  getters: {
    getUser: (state) => state.user ?? null,
    getAllBalance: ({user}) => ({
      balance: user?.balance,
      bonus_balance: user?.bonus_balance
    })
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
  },
})