<script setup>
  defineOptions({
    name: "Header",
  });
</script>

<template>
  <header class="header">
    <div class="header__topSector">
      <balance-block />
      <button>log out</button>
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
