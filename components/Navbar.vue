<script setup>
  defineOptions({
    name: "Navbar",
  });
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/main"> Турниры </NuxtLink>
    <NuxtLink to="/news"> Новости </NuxtLink>
    <NuxtLink to="/cabinet"> Кабинет </NuxtLink>
  </nav>
</template>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
