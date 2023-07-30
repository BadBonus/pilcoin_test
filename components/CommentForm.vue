<script setup>
  import * as yup from "yup";
  import { useStoreUser } from "@/store/storeUser";

  defineOptions({
    name: "CommentForm",
  });

  const emit = defineEmits(["onSubmit"]);

  const schema = markRaw(
    yup.object({
      comment: yup.string().required(),
    })
  );

  const store = useStoreUser();
  const comment = ref(null);
  const isLoading = ref(false);

  const onSubmit = async (values, { resetForm }) => {
    isLoading.value = true;
    await emit("onSubmit", comment.value);
    isLoading.value = false;
    resetForm();
  };
</script>

<template>
  <VeeForm ref="form" :class="{ disabled: isLoading }" :validation-schema="schema" @submit="onSubmit">
    <b>{{ store.getName }}</b>
    <br />
    <VeeField v-slot="{ field }" autocomplete="comment" v-model="comment" name="comment" type="textarea">
      <textarea placeholder="Пишем сюда" v-bind="field" name="comment" />
    </VeeField>
    <VeeErrorMessage name="comment" />
    <br />
    <button type="submit">Комментировать</button>
  </VeeForm>
</template>

<style lang="scss" scoped>
  form {
    &.disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }

    textarea {
      width: 100%;
      border: 2px dashed black;
      height: 100px;
    }
  }
</style>
