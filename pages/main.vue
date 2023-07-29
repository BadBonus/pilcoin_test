<script setup>
  import { useStoreTournaments } from "@/store/storeTournaments";
  const store = useStoreTournaments();

  const tournaments = ref([]);

  onMounted(async () => {
    if (!tournaments.value.length) {
      await store.loadTournaments();
      tournaments.value = store.getTournaments;
    }
  });
</script>

<template>
  <main>
    <ul v-if="tournaments" class="list">
      <li v-for="el in tournaments" :key="el.id">
        <NuxtLink :to="'/tournament-' + el.slug">
          <Item :img="imgBasicUrl + el.logo" :name="el.name" />
        </NuxtLink>
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
