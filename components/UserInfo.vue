<script setup>
  import { useStoreUser } from "@/store/storeUser";
  const { getUserForProfile } = useStoreUser();

  const store = useStoreUser();
</script>

!
<template>
  <div>
    <h1>Информация об пользователе</h1>
    <ul>
      <li v-for="(value, name) in store.getUserForProfile" :key="name">{{ name }}:{{ value }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
