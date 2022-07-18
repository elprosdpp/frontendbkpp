<template>
  <h1 class="mb-10">List Kegiatan Bidang</h1>
  <input
    type="search"
    id="default-search"
    class="block mb-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
    placeholder="Search"
    v-model="search"
    required
  />
  <div class="text-center py-10" v-if="!items || !items.length">Data Tidak Ditemukan</div>
  <ul v-else v-for="item in items" :key="item.id">
    <li>{{ item.id }} . {{ item.title }}</li>
  </ul>

  <div class="flex flex-col items-center">
    <!-- Help text -->
    <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing
      <span class="font-semibold text-gray-900 dark:text-white">{{ meta.from }}</span> to
      <span class="font-semibold text-gray-900 dark:text-white">{{ meta.to }}</span> of
      <span class="font-semibold text-gray-900 dark:text-white">{{ meta.total }}</span>
      Entries
    </span>
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
</template>

<script>
import { toRefs, onMounted, reactive, watchEffect } from "vue";
import axios from "axios";

// Get Data API
let url = "http://localhost:8000/api/blog";

export default {
  name: "ListKegiatan",

  setup() {
    const state = reactive({
      items: [],
      lastPage: "",
      pages: "",
      meta: "",
      search: "",
      // loading: false,
    });

    const getData = (pages = 1) => {
      // state.loading = true;
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

    onMounted(() => {
      getData();
    });

    watchEffect(() => {
      getData();
    });

    return {
      ...toRefs(state),
      getData,
    };
  },
};
</script>

<style></style>
