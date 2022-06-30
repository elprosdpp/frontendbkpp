<template>
  <div v-if="error">{{ error }}</div>
  <div v-else class="flex justify-between flex-wrap">
    <AsyncAgenda v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import { defineAsyncComponent, ref } from "vue";
import Loading from "./LoadingAgenda.vue";

const AsyncAgenda = defineAsyncComponent({
  loader: () => import("./AgendaComp.vue" /* webpackChunkName: "Agenda" */),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false,
});

export default {
  name: "Agenda",
  components: {
    AsyncAgenda,
  },

  async setup() {
    const items = ref(null);
    const error = ref(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      items.value = response.data;
    } catch (e) {
      error.value = "Data Tidak Ditemukan!";
    }
    console.log(items);
    return {
      items,
      error,
    };
  },
};
</script>

<style></style>
