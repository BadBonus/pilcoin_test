export const useStoreUser = defineStore('storeUser', {
  state: (): {user: null | Object} => ({
    user: null
  }),

  getters: {
    getUser: (state) => state.user ?? null
  },

  actions: {
    setUser(data: object) {
      this.user = data
    },
    setUserInfo(data: Object) {
      if (this.user) this.user = {...data, ...this.user};
    },
    clearUser() {
      this.user = null
    },
  },
})