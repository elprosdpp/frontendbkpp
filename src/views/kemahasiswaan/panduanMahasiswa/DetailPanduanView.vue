<template>
  <!-- Button Back -->
  <div class="mb-10">
    <router-link
      to="/kemahasiswaan/panduanMahasiswa"
      class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      ><svg
        aria-hidden="true"
        class="mr-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      Back
    </router-link>
  </div>
  <!-- Loading Data -->
  <Loader v-if="loading" />
  <div v-else class="">
    <h1 class="font-bold text-2xl uppercase mb-2">{{ items.name }}</h1>
    <p class="text-link text-justify">{{ items.description }}</p>
  </div>
</template>

<script>
// Get Data API
let url = "http://localhost:8000/api/panduan/";

// Inisialisasi
import { toRefs, onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Loader from "./LoaderDetailView.vue";

export default {
  name: "DetailPanduan",
  components: { Loader },

  setup() {
    const route = useRoute();
    const state = reactive({
      items: [],
      loading: false,
    });

    let slug = route.params.slug;

    const getData = () => {
      state.loading = true;
      axios
        .get(url + slug)
        .then((response) => {
          state.items = response.data.data;
          state.loading = false;
        })
        .catch((error) => console.log(error));
    };

    onMounted(() => {
      getData();
    });

    watchEffect(() => {
      if (state.items.name) {
        document.title = `${state.items.name} - BKAPP UNW`;
      } else {
        document.title = route.meta.title;
      }
    });

    return { ...toRefs(state), getData };
  },
};
</script>

<style></style>
