<script setup>
  defineOptions({
    name: "Header",
  });
</script>

<template>
  <header class="header">
    <div class="header__topSector">
      <div>
        <balance-block />
        <button @click="showPopupUserInfo">Проверить профиль</button>
      </div>
      <button @click="logOut">Выход</button>
    </div>
    <Navbar />
  </header>
</template>

<style lang="scss">
  .header {
    border-bottom: 2px dashed black;
    padding-bottom: 8px;

    &__topSector {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
  }
</style>
