<script setup>
  import { useToast } from "vue-toastification";
  import { useStoreUser } from "@/store/storeUser";

  defineOptions({
    name: "tournamentPage",
  });

  const store = useStoreUser();
  const toast = useToast();

  const info = ref(null);
  const comments = ref(null);
  const isCanComment = ref(null);
  const isLoadingComments = ref(false);
  const isCanBet = ref(null);

  const submitBet = (body) => {
    over_fetch(makeBet_url, {
      method: "POST",
      body,
    })?.then(async () => {
      const data = await store.loadUserInfo();
      toast.success("Ставка сделана");
      toast("Ваш текущий счёт: " + data.balance + " и бонусный счёт: " + data.bonus_balance);
      const dataTournament = await over_fetch(getTournamentEvent_url);
      info.value = dataTournament;
    });
  };

  const submitCommnet = (comment) => {
    over_fetch(getTournamentEventComments_url, {
      body: {
        comment,
      },
      method: "POST",
    }).then(async () => {
      const rawCommentsData = await over_fetch(getTournamentEventComments_url);
      comments.value = rawCommentsData.comments;
    });
  };

  onMounted(async () => {
    const data = await over_fetch(getTournamentEvent_url);
    const rawCommentsData = await over_fetch(getTournamentEventComments_url);
    info.value = data;
    comments.value = rawCommentsData.comments;
    isCanComment.value = per_isAllowed(permissions.can_create_comment);
    isCanBet.value = per_isAllowed(permissions.can_bet);
  });
</script>

<template>
  <div v-if="info" class="tournamentPage">
    <h1>
      {{ info.name }}
      <br />
      <small>
        {{ info.discipline }}
      </small>
      <br />
      <NuxtImg :src="imgBasicUrl + info.tournament.logo" />
    </h1>
  </div>
  <BetTeamForm @on-submit="submitBet" v-if="isCanBet" :teams="info.teams" />
  <CommentForm @on-submit="submitCommnet" :disabled="true" :class="{ tpage__commentForm: true, disabled: !isCanComment }" />
  <h5 v-if="!isCanComment">Нет доступа к комментариям</h5>
  <CommentsList :class="{ isLoading: isLoadingComments }" :comments="comments" />
</template>

<style scoped lang="scss">
  .isLoadingComments {
    opacity: 0.5;
  }
  .tournamentPage {
    text-align: center;
  }
  img {
    max-width: 800px;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border: 2px dashed black;
    padding: 8px;
  }
  .tpage__commentForm {
    margin: auto;
    max-width: 500px;
  }
  h5 {
    transform: translateY(-120px);
    text-align: center;
  }
</style>
