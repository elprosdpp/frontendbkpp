<template>
  <Progress />
  <div id="top" class="flex items-center h-72 bg-gray-50 bg-waves bg-center bg-no-repeat">
    <div class="container w-1/2 mx-auto p-5 -mt-[5.5rem]">
      <p class="text-sm text-center mb-2">Published : {{ Tanggal(items.created_at) }}</p>
      <h1 class="text-2xl text-center font-bold text-dBlue uppercase">
        {{ items.title }}
      </h1>
    </div>
  </div>
  <div class="px-5">
    <div class="flex flex-wrap justify-center mb-4">
      <img
        :src="items.image"
        :alt="items.title"
        class="w-[70%] mb-5 -mt-[7rem] rounded-lg"
      />
    </div>
    <div class="description text-justify px-[14rem] pb-20">
      <p class="text-lg">
        {{ items.description }}
      </p>

      <hr class="my-10" />
      <button
        type="button"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {{ items.category }}
      </button>
    </div>
  </div>
</template>
<script>
// Get Data API
let url = "http://localhost:8000/api/news/";

// Inisialisasi
import { toRefs, onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Progress from "@/components/ProgressScroll.vue";
import moment from "moment";

export default {
  name: "DetailBerita",
  components: { Progress },
  setup() {
    const route = useRoute();
    const state = reactive({
      items: [],
      loading: false,
    });

    let id = route.params.slug;

    const getData = () => {
      state.loading = true;
      axios
        .get(url + id)
        .then((response) => {
          state.items = response.data.data;
          state.loading = false;
        })
        .catch((error) => console.log(error));
    };

    const Tanggal = (date) => {
      moment.locale("id");
      return moment(date).format("LLLL");
    };

    onMounted(() => {
      getData();
    });

    watchEffect(() => {
      if (state.items.title) {
        document.title = `${state.items.title} - BKAPP UNW`;
      } else {
        document.title = route.meta.title;
      }
    });

    return { ...toRefs(state), getData, Tanggal };
  },
};
</script>
<style>
@import "@/assets/scss/app.css";
</style>
