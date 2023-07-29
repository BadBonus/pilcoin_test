interface listTournaments {
  tournaments: Array<Object>
}

export const useStoreTournaments = defineStore('storeTournaments', {
  state: (): {tournaments: null | listTournaments} => ({
    tournaments: null
  }),

  getters: {
    getTournaments: ({tournaments}) => tournaments?.tournaments
  },

  actions: {
    setTournaments(data: listTournaments) {
      this.tournaments = data
    },
    async loadTournaments() {
      const {data} = await over_useFetch(tournaments_url);
      this.setTournaments(data.value);
    }
  },
})