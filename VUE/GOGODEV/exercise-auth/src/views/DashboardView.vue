<script lang="ts" setup>
import { ref } from "vue";
import Notes from "../components/Notes.vue";
import axios from "axios";
import { useAuthStore } from "../store/AuthStore";

const noteToCreate = ref("");
const notes = ref();

const URL_API = "http://127.0.0.1:8000/api";
const store = useAuthStore();
const TOKEN = store.TOKEN_AUTH;

const getNotes = async () => {
  try {
    const { data } = await axios.get(`${URL_API}/note`, {
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    notes.value = data;
  } catch (error) {}
};
getNotes();

const createNotes = async () => {
  try {
    axios.post(
      `${URL_API}/note`,
      {
        content: noteToCreate.value,
      },
      {
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      }
    );
    getNotes();
  } catch (error) {}
};
</script>

<template>
  <div>
    <section>
      <span>LISTADO DE NOTAS</span>
      <Notes :notes="notes" />
    </section>

    <section>
      <span>CREAR NUEVA NOTA</span>
      <hr />
      <div class="">
        <form @submit.prevent="createNotes">
          <label for="content">CONTENIDO:</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            v-model="noteToCreate"
          ></textarea>
          <span>VALOR: {{ noteToCreate }}</span>

          <button>Guardar Nota</button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
