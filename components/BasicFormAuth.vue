<script setup>
  defineOptions({
    name: "BasicForm",
  });

  const form = reactive({
    email: "frontend@test.net",
    password: "d*Q7AFB758ib",
  });

  const onSubmit = async () => {
    const body = toRaw(form);
    const { data, pending, error, status } = await over_useFetch(auth_login_url, {
      method: "POST",
      body,
    });

    setUserToken(data.value.accessToken);
    setUserRefreshToken(data.value.refreshToken);
    navigateTo("/main");
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

<style lang="scss" scoped>
  button {
    margin-top: 8px;
  }
</style>
