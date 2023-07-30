<script setup>
  import { useStoreUser } from "@/store/storeUser";
  import { storeToRefs } from "pinia";

  const { getUser } = storeToRefs(useStoreUser());
</script>

<template>
  <ClientOnly><Header v-if="getUser" /></ClientOnly>
  <slot />
</template>
