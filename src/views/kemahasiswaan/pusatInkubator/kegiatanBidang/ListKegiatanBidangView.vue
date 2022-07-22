<template>
  <!-- Pagination & Search -->
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

  <div class="border-b mt-5 mb-5"></div>

  <!-- Loading Data -->
  <div v-if="loading" class="flex justify-center">
    <svg
      role="status"
      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      ></path>
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      ></path>
    </svg>
  </div>

  <!-- Content -->
  <div v-else class="flex justify-between flex-wrap mb-5 mt-5">
    <AsyncKegiatan v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { toRefs, onMounted, reactive, watchEffect, defineAsyncComponent } from "vue";

import axios from "axios";
import Loading from "@/components/kemahasiswaan/LoadingAgenda.vue";

// Get Data API
let url = "http://localhost:8000/api/blog";

const AsyncKegiatan = defineAsyncComponent({
  loader: () => import("./AsyncKegiatanCardView.vue" /* webpackChunkName: "Kegiatan" */),
  loadingComponent: Loading,
  delay: 200,
});

export default {
  name: "ListKegiatan",
  components: { AsyncKegiatan },

  setup() {
    const state = reactive({
      items: [],
      lastPage: "",
      pages: "",
      meta: "",
      search: "",
      disabled: null,
      loading: false,
    });

    const getData = (pages = 1) => {
      state.loading = true;
      axios
        .get(url + "?page=" + pages + "&s=" + state.search)
        .then((response) => {
          state.items = response.data.data;
          state.meta = response.data.meta;
          state.pages = response.data.meta.current_page;
          state.lastPage = response.data.meta.last_page;
          state.loading = false;
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
