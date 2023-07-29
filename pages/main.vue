<script setup>
  import { useStoreTournaments } from "@/store/storeTournaments";
  const store = useStoreTournaments();

  const tournaments = ref([]);

  onMounted(async () => {
    await store.loadTournaments();
    tournaments.value = store.getTournaments;
  });
</script>

<template>
  <main>
    <ul v-if="tournaments" class="list">
      <li v-for="el in tournaments" :key="el.id">
        <Item :img="'https://cdn.pilcoin.social/_tournament/' + el.logo" :name="el.name" />
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
  .list {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    li {
      min-width: 350px;
      margin: auto;
      width: 30%;
      transition: 0.3s;
      border: 2px dashed black;
      padding: 4px;
      text-align: center;
      &:hover {
        &:hover {
          background: lightcoral;
          color: #fff;
        }
      }
    }
  }
</style>
