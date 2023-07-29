interface IListTournaments {
  tournaments: Array<Object>
}

export const useStoreTournaments = defineStore('storeTournaments', {
  state: (): {tournaments: null | IListTournaments} => ({
    tournaments: null
  }),

  getters: {
    getTournaments: ({tournaments}) => tournaments?.tournaments
  },

  actions: {
    setTournaments(data: IListTournaments) {
      this.tournaments = data
    },
    async loadTournaments() {
      const data = await over_fetch("https://api.pilcoin.social/api/tournament");
      // const {data, pending,error} = await over_useFetch(tournaments_url);
      // console.log('loadTournaments');
      // console.log(data1.value);
      // console.log(data2.value);
      this.setTournaments(data);
    },
    clearStore() {
      this.tournaments = null;
    }
  },
})