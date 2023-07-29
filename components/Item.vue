<script setup lang="ts">
  interface Item {
    name: String;
    img: String;
    id?: String | Number;
    prize?: String;
    addInfo?: String;
  }

  defineOptions({
    name: "Item",
  });

  const props = defineProps<Item>();
</script>

<template>
  <article class="item">
    <span class="item__name">
      {{ name }}
    </span>
    <nuxt-img class="item__img" fit="cover" quality="80" :src="img" />
    <div class="item__addSector">
      <span class="item__addInfo">{{ addInfo }}</span>
      <span class="item__prize">{{ prize }}</span>
    </div>
  </article>
</template>

<style lang="scss">
  .item {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
    }

    &__name {
      font-weight: 600;
      font-size: 17px;
    }
  }
</style>
