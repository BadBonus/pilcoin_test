<script setup>
  import { useStoreUser } from "@/store/storeUser";
  defineOptions({
    name: "cabinetPage",
  });
  const store = useStoreUser();
</script>

<template>
  <h1>Информация об пользователе</h1>
  <ul>
    <li v-for="(value, name) in store.getUserForProfile" :key="name">{{ name }}:{{ value }}</li>
  </ul>
</template>

<style lang="scss"></style>
