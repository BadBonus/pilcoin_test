<script setup>
  import { useStoreUser } from "@/store/storeUser";

  defineOptions({
    name: "BasicForm",
  });

  const store = useStoreUser();

  const form = reactive({
    email: "frontend@test.net",
    password: "d*Q7AFB758ib",
  });

  const onSubmit = async () => {
    const body = toRaw(form);
    const request = await useFetch(auth_login_url, {
      method: "POST",
      body,

      onResponse({ request, response, options }) {
        setUserToken(response._data.accessToken);
        setUserRefreshToken(response._data.refreshToken);
        store.setUser(body);
        navigateTo("/main");
      },
    });
  };
</script>

<template>
  <VeeForm :validation-schema="userSchema" @submit="onSubmit">
    <VeeField autocomplete="current-user" v-model="form.email" name="email" type="text" />
    <VeeErrorMessage name="email" />
    <br />

    <VeeField autocomplete="current-password" v-model="form.password" name="password" type="password" />
    <VeeErrorMessage name="password" />
    <br />
    <button>Press me!</button>
  </VeeForm>
</template>

<style lang="scss" scoped></style>
