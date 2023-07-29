<script setup>
  defineOptions({
    name: "tournamentPage",
  });

  const info = ref(null);

  onMounted(async () => {
    const data = await over_fetch(getTournament_url);
    info.value = data;
  });
</script>

<template>
  <div v-if="info" class="tournamentPage">
    <h1>
      {{ info.name }}
      <br />
      <small>
        {{ info.discipline }}
      </small>
      <br />
      <NuxtImg :src="imgBasicUrl + info.logo" />
    </h1>
  </div>
</template>

<style scoped lang="scss">
  .tournamentPage {
    text-align: center;
  }
  img {
    max-width: 800px;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border: 2px dashed black;
    padding: 8px;
  }
</style>
