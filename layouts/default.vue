<script setup>
  import { useStoreUser } from "@/store/storeUser";
  import { storeToRefs } from "pinia";

  const { user } = storeToRefs(useStoreUser());
</script>

<template>
  <Header v-if="user" />
  <slot />
</template>
