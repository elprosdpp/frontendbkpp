<template>
  <!-- <h1 class="mb-10">List Kegiatan Bidang</h1> -->

  <div class="flex flex-wrap justify-between items-center pb-5">
    <div class="w-1/2">
      <label
        for="default-search"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >Search Kegiatan</label
      >
      <input
        type="search"
        id="default-search"
        class="block w-10/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Search"
        v-model="search"
        required
      />
    </div>
    <div class="inline-flex mt-2 xs:mt-0">
      <!-- Buttons -->
      <button
        type="button"
        class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :disabled="pages > 1 ? disabled : ''"
        @click="getData(pages - 1)"
      >
        &laquo; Previous
      </button>
      <button
        type="button"
        class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :disabled="pages < lastPage ? disabled : ''"
        @click="getData(pages + 1)"
      >
        Next &raquo;
      </button>
    </div>
  </div>

  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400 mb-10">
    Showing
    <span class="font-semibold text-gray-900 dark:text-white">{{ meta.from }}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{{ meta.to }}</span> of
    <span class="font-semibold text-gray-900 dark:text-white">{{ meta.total }}</span>
    Entries
  </span>

  <div class="flex justify-between flex-wrap mb-5 mt-5">
    <div
      v-for="item in items"
      :key="item.id"
      class="p-6 mb-3 w-full lg:w-[49%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate__animated animate__fadeIn"
    >
      <!-- tanggal upload content/agenda -->
      <div class="flex justify-between mb-3">
        <p class="font-bold uppercase text-link text-sm">{{ item.category }}</p>
        <p cla ss="font-bold uppercase text-link text-sm">
          {{ Tanggal(item.created_at) }}
        </p>
      </div>
      <!-- end tanggal upload content/agenda -->
      <!-- <a href="#"> -->
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ item.title }}
      </h5>
      <!-- </a> -->
      <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
        {{ item.description }}
      </p>
      <!-- Modal toggle -->
      <router-link
        :to="{
          name: 'Detail Kegiatan',
          params: { id: item.id },
        }"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Detail
      </router-link>
    </div>
  </div>
</template>

<script>
import { toRefs, onMounted, reactive, watchEffect } from "vue";
// import { useRoute } from "vue-router";
import moment from "moment/min/moment-with-locales";
import axios from "axios";

// Get Data API
let url = "http://localhost:8000/api/blog";

export default {
  name: "ListKegiatan",

  setup() {
    // const route = useRoute();
    const state = reactive({
      items: [],
      lastPage: "",
      pages: "",
      meta: "",
      search: "",
      disabled: null,
      // loading: false,
    });

    const getData = (pages = 1) => {
      // state.loading = true;
      // let _page = route.query.page || 1;
      axios
        .get(url + "?page=" + pages + "&s=" + state.search)
        .then((response) => {
          state.items = response.data.data;
          state.meta = response.data.meta;
          state.pages = response.data.meta.current_page;
          state.lastPage = response.data.meta.last_page;
          // state.loading = false;
        })
        .catch((error) => console.log(error));
    };

    const Tanggal = (date) => {
      moment.locale("id");
      return moment(date, "YYYYMMDD").fromNow();
    };

    onMounted(() => {
      getData();
    });

    watchEffect(() => {
      getData();
    });

    return {
      ...toRefs(state),
      getData,
      Tanggal,
    };
  },
};
</script>

<style></style>
