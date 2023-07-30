<script lang="ts" setup>
  interface ICommentList {
    comments?: Array<IComment>;
  }

  interface ICommentUser {
    id: number;
    nickname: string;
  }

  interface IComment {
    id: number;
    comment: string;
    created_at: string;
    user: ICommentUser;
  }

  defineOptions({
    name: "listOfComments",
  });

  const props = defineProps<ICommentList>();
</script>

<template>
  <div class="listOfComments">
    <h2>Комментарии</h2>
    <ul class="setOfComments" v-if="props.comments">
      <li v-for="{ id, user, comment } in props.comments" :key="id" class="comment">
        <b>{{ user.nickname }}</b>
        <br />
        <span>{{ comment }}</span>
      </li>
    </ul>
    <h3 v-else>Ни одного комментария :(</h3>
  </div>
</template>

<style scoped lang="scss">
  .listOfComments {
    max-width: 500px;
    width: 100%;
    margin: auto;
    margin-top: 12px;

    .setOfComments {
      max-height: 500px;
      overflow-y: scroll;
    }

    ul {
      border-left: 2px solid #000;
      border-right: 2px solid #000;
      padding-left: 8px;
      padding-right: 8px;
      margin-top: 0;

      li {
        margin-bottom: 12px;
      }
    }

    h2 {
      text-align: center;
      margin-bottom: 0;
    }
  }
  .comment {
    span {
      border: 2px dashed black;
      display: block;
      padding: 4px;
    }
  }
</style>
