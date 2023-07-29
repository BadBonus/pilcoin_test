<script setup lang="ts">
  import { useStoreUser } from "@/store/storeUser";

  interface IBalanceBlock {
    balance?: String | Number;
  }

  const store = useStoreUser();
  const { balance = 0, bonus_balance = 0 } = store.getAllBalance;

  defineOptions({
    name: "BalanceBlock",
  });

  const props = defineProps<IBalanceBlock>();
</script>

<template>
  <div class="Balance">
    <span>Ваш баланс: {{ Math.trunc(+balance) }}</span>
    <br />
    <span>Ваш бонусный баланс: {{ Math.trunc(+bonus_balance) }} </span>
  </div>
</template>

<style lang="scss"></style>
