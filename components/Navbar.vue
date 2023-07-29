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

<style scoped lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      border-radius: 100px;
      border: 1px solid black;
      padding: 4px 8px;
      display: flex;
      transition: 0.3s;
      &:hover {
        background: black;
        color: #fff;
      }

      &.router-link-active {
        background: black;
        color: #fff;
        cursor: default;
        pointer-events: none;
      }
    }
  }
</style>
