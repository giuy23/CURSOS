<script lang="ts" setup>
//--------USEQUERY
// import { useQuery } from "@vue/apollo-composable";
// import gql from "graphql-tag";

// const { result, loading, error, refetch, onResult, onError } = useQuery(
//   gql`
//     query ($name: String!) {
//       getCommentsFromUser(name: $name) {
//         name
//         text
//       }
//     }
//   `,
//   () => ({
//     name: "User 1",
//   }),
//   {
//     fetchPolicy: "cache-and-network",
//     pollInterval: 5000,
//   }
// );

// onResult((queryResult) => {
//   console.log(queryResult.data);
//   console.log(queryResult.loading);
//   console.log(queryResult.networkStatus);
// });

// onError((error) => {
//   console.log(error.graphQLErrors);
// });

// ---------USE MUTATION
// import { useMutation } from "@vue/apollo-composable";
// import gql from "graphql-tag";

// const {
//   mutate: createComment,
//   loading: createCommentLoading,
//   error: createCommentError,
//   onDone,
//   onError,
// } = useMutation(
//   gql`
//     mutation ($name: String!, $text: String!) {
//       createComment(name: $name, text: $text)
//     }
//   `,
//   () => ({
//     variables: {
//       name: "Gogodev",
//       text: "Hi from vue",
//     },
//     update: (cache, { data: {createComment} }) => {
//       let data = cache.readQuery({ query: getAllComments });
//       data = {
//         ...data,
//         comments: [
//           ...data.comments,
//           {
//             name: "",
//             text: "",
//           },
//         ],
//       };
//     },
//   })
// );

// onDone((done) => {
//   console.log(done.value);
// });

// onError((error) => {
//   console.log(error.message);
// });

// ------ SUSCRIPTIONS
import { useSubscription } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, watch } from "vue";

const { result } = useSubscription(gql`
  subscription {
    commentCreated {
      name
      text
    }
  }
`);

const subs = ref([]);

watch(result, (data) => {
  console.log(data);
  
  subs.value.push(data.commentCreated);
});
</script>

<template>
  <!-- USE QUERY -->
  <!-- <div>Hello World</div>
  <section>{{ (result, loading, error) }}</section>

  <section>
    <h1>Comments</h1>
    <div class="" v-if="loading">
      <h3>Loading...</h3>
    </div>

    <div class="" v-else>
      <ul>
        <li v-for="(Comment, index) in result.getCommentsFromUser" :key="index">
          <b>{{ Comment.name }} </b>: {{ Comment.text }}
        </li>
      </ul>
    </div>
    <div class="" v-if="error">
      <h3 style="error">{{ error.message }}</h3>
    </div>

    <button @click="refetch()">REFRESH</button>
  </section> -->

  <!-- USE MUTATION -->
  <!-- <button @click="($event) => createComment()">GENERAR COMENTARIO</button> -->

  <!-- SUSCRIPTIONS -->
  <h3>NOTIFICATIONS</h3>
  <hr>
  <ul>
    <li v-for="(sub, index) in subs" :key="index">
      <b>{{ sub.name }}:</b> {{ sub.text }}
    </li>
  </ul>
</template>

<style scoped>
.error {
  color: red;
}
</style>
