<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header judul="Agenda Kehumasan" caption="Memuat Semua Komponen Agenda Kehumasan" />
      <div>
        <label
          for="default-search"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Cari Agenda</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            v-model="search"
            class="block p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 lg:w-[25rem]"
            placeholder="Cari Agenda"
            required
          />
        </div>
      </div>
    </div>

    <div class="border-b mb-5"></div>

    <!-- Pagination & Meta Helper -->
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">{{ meta.from }}</span>
        to
        <span class="font-semibold text-gray-900 dark:text-white">{{ meta.to }}</span> of
        <span class="font-semibold text-gray-900 dark:text-white">{{ meta.total }}</span>
        Entries
      </span>
      <page-simple
        :pages="pages"
        :lastPage="lastPage"
        :disabled="disabled"
        @changepage="getData"
      />
    </div>

    <!-- Loading Data -->
    <div class="border-b mt-5 mb-5"></div>
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

    <!-- Content Render -->
    <div v-else class="flex justify-between flex-wrap mb-5 mt-5">
      <AsyncHumas v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
// Inisialisasi
import Header from "@/components/HeaderView.vue";
import PageSimple from "@/components/SimplePagination.vue";
import { toRefs, onMounted, reactive, watchEffect, defineAsyncComponent } from "vue";
import axios from "axios";
// Get Data API
let url = "http://localhost:8000/api/blog";
// Loading Component
import Loading from "@/components/kemahasiswaan/LoadingAgenda.vue";
// Async Component
const AsyncHumas = defineAsyncComponent({
  loader: () =>
    import("./AsyncAgendaHumasView.vue" /* webpackChunkName: "KegiatanHumas" */),
  loadingComponent: Loading,
  delay: 200,
});

export default {
  name: "AgendaKehumasan",
  components: { Header, PageSimple, AsyncHumas },

  setup() {
    const state = reactive({
      items: [],
      lastPage: 1,
      pages: 1,
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
