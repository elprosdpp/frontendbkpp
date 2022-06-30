<template>
  <!-- Handle Error -->
  <div v-if="error">{{ error }}</div>

  <!-- Wrapper Agenda -->
  <div v-else class="content">
    <div class="border-b mb-5"></div>

    <!-- Search & Select Option -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <div class="">
        <label
          for="default-search"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Pilih Kategori Agenda</label
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </div>
          <select
            id="countries"
            class="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 lg:w-[20rem]"
          >
            <option selected>Filter Kategori</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
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
            type="text"
            id="default-search"
            class="block p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 lg:w-[25rem]"
            placeholder="Cari Agenda"
            required
          />
        </div>
      </div>
    </div>
    <!-- End Search & Select Option -->

    <div class="border-b mb-5"></div>

    <!-- Content Agenda -->
    <div class="flex justify-between flex-wrap">
      <AsyncAgenda v-for="item in items" :key="item.id" :item="item" />
    </div>
    <!-- End Content Agenda -->

    <!-- Pagination -->
    <div class="flex justify-center py-24">
      <Pagination
        :totalPages="10"
        :perPage="10"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
    <!-- End Pagination -->
  </div>
</template>

<script>
import axios from "axios";
import { defineAsyncComponent, ref } from "vue";
import Loading from "./LoadingAgenda.vue";
import Pagination from "@/components/Pagination.vue";

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
    Pagination,
  },

  data() {
    return {
      currentPage: 1,
    };
  },

  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
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
    // console.log(items);
    return {
      items,
      error,
    };
  },
};
</script>

<style></style>
