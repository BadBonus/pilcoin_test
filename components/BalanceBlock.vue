<script setup lang="ts">
  interface BalanceBlock {
    balance?: String | Number;
  }

  defineOptions({
    name: "BalanceBlock",
  });

  const props = defineProps<BalanceBlock>();
</script>

<template>
  <div class="Balance">Your balance: {{ balance }}</div>
</template>

<style lang="scss"></style>
