<script lang="ts" setup>
  import * as yup from "yup";

  interface IBetTeamBlock {
    teams?: Array<IBetTeamItem>;
  }
  interface IBetTeamItem {
    id: number | string;
    name: string;
    discipline: string;
    competitive: string;
    logo: string;
    info: string;
    total: string;
  }

  defineOptions({
    name: "BetTeamBlock",
  });
  defineProps<IBetTeamBlock>();
  const emit = defineEmits(["onSubmit"]);

  const selected = ref<null | IBetTeamItem>(null);
  const money = ref<number | null>(0);
  const isLoading = ref(false);

  const schema = markRaw(
    yup.object({
      money: yup.number().required(),
    })
  );

  const onSubmit = async () => {
    if (selected) {
      isLoading.value = true;

      await emit("onSubmit", {
        betting_id: 1,
        team_id: selected.value.id,
        bet: String(money.value),
      });

      isLoading.value = false;
    }
  };
</script>

<template>
  <VeeForm :class="{ IBetTeamBlock: true, isLoading }" :validation-schema="schema" @submit="onSubmit">
    <hr />
    <h2>Сделаем ставку?</h2>
    <ul v-if="teams" class="listOfTeams">
      <li @click="selected = team" :class="{ isSelected: selected === team }" v-for="team in teams" :key="team.id">
        <NuxtImg :src="'https://cdn.pilcoin.social/_team_big_logo/' + team.logo" />
        <b class="name">{{ team.name }}</b>
        <p class="stavka">
          Общая ставка на команду: <br />
          {{ (+team.total).toFixed() }} USD
        </p>
      </li>
    </ul>

    <VeeField autocomplete="current-money" v-model="money" name="money" type="number" />
    <VeeErrorMessage name="money" />
    <br />

    <button :disabled="!selected" class="-big">Ставим</button>

    <hr />
  </VeeForm>
</template>

<style scoped lang="scss">
  .isLoading {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
  h2 {
    text-align: center;
  }
  .betBlock {
    margin: auto;
    max-width: 800px;
    width: 100%;
    text-align: center;
  }

  .listOfTeams {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      width: 260px;
      border-width: 2px;
      border-radius: 100px;
      text-align: center;
      border-style: dashed;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background: lightgreen;
      }
      &.isSelected {
        background: green;
        color: #fff;
      }
    }

    img {
      width: 120px;
      border-radius: 100%;
      border: 2px dotted;
      display: block;
      margin: auto;
    }
  }

  .-big {
    padding: 15px;
    font-size: 17px;
    margin: auto;
    display: block;

    &:disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }
  }

  input {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
