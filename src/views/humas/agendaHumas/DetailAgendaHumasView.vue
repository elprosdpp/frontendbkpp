<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header :judul="items.title" caption="Detail Agenda Kehumasan" />
      <router-link
        to="/humas/agendaKehumasan"
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

    <div class="border-b mb-5"></div>

    <!-- Render Content -->
    <loading v-if="loading" class="py-10"></loading>
    <div v-else class="py-10 animate__animated animate__fadeIn">
      <div class="container mx-auto p-4 -mt-5">
        <p class="text-sm text-center mb-2">
          Published : {{ Tanggal(items.created_at) }}
        </p>
        <h1 class="text-4xl text-center font-bold text-dBlue uppercase">
          {{ items.title }}
        </h1>
      </div>
      <div class="flex justify-center">
        <img
          :src="items.image"
          :alt="items.title"
          class="rounded-md"
          style="width: 1920px; height: 500px; object-fit: cover"
        />
      </div>
      <div class="description text-justify px-[2rem] py-10">
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
  </div>
</template>

<script>
// Get Data API
let url = "http://localhost:8000/api/blog/";

// Inisialisasi
import Header from "@/components/HeaderView.vue";
import { toRefs, onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Loading from "@/components/LoadingDetail.vue";

// import moment from "moment";
import moment from "moment/min/moment-with-locales";

export default {
  name: "DetailKegiatanHumas",
  components: { Header, Loading },

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

<style></style>
