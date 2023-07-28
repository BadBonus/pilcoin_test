export const useStoreUser = defineStore('storeUser', {
  state: () => ({
    user: null
  }),

  getters: {
    getUser: (state) => state.user ?? null
  },

  actions: {
    setUser(data: any) {
      this.user = data
    },
    clearUser() {
      this.user = null
    },
  },
})