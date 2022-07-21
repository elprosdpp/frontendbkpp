<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header
        judul="Peraturan-Peraturan"
        caption="Memuat Semua Dokumen Peraturan-Peraturan"
      />
    </div>

    <div class="border-b mb-5"></div>

    <!-- Pagination & Meta Helper -->
    <div class="flex flex-wrap justify-between items-center mb-3 md:mb-3 lg:md-0">
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">{{ meta.from }}</span>
        to
        <span class="font-semibold text-gray-900 dark:text-white">{{ meta.to }}</span> of
        <span class="font-semibold text-gray-900 dark:text-white">{{ meta.total }}</span>
        Entries
      </span>
      <PageSimple
        :pages="pages"
        :lastPage="lastPage"
        :disabled="disabled"
        @changepage="getData"
      />
    </div>

    <!-- Search & Password Dokumen -->
    <div class="flex flex-wrap justify-between items-center">
      <div class="mb-3 md:mb-3 lg:md-0">
        <label
          for="default-search"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Cari Dokumen</label
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
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 lg:w-[25rem]"
            placeholder="Cari Dokumen"
            required
          />
        </div>
      </div>
      <div class="mb-3 md:mb-3 lg:md-0">
        <label
          for="default-search"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          :class="errMsg ? 'text-red-700' : ''"
          >Password Dokumen</label
        >
        <div class="relative">
          <form action="#">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                :class="errMsg ? 'w-5 h-5 text-red-900' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <input
              type="password"
              name="password"
              autocomplete="on"
              v-model="pass"
              :class="errMsg ? 'border-red-500 text-red-900 placeholder-red-700' : ''"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 lg:w-[25rem]"
              placeholder="Password Dokumen"
              required
            />
          </form>
        </div>
        <p v-if="errMsg" class="mt-2 text-sm text-red-600 dark:text-red-500">
          Password Dokumen <span class="font-bold">{{ errMsg }}</span> Salah!
        </p>
      </div>
    </div>

    <div class="border-b mt-5 mb-5"></div>

    <!-- Content Render -->
    <div class="cardProtokoler flex justify-between flex-wrap mb-5 mt-5">
      <div
        v-for="item in items"
        :key="item.id"
        class="w-full mb-3 lg:w-[49%] rounded-lg border border-gray-200 bg-white"
      >
        <div class="text-right p-4">
          <span class="text-xs text-gray-500 tracking-widest uppercase">Dokumen</span>
        </div>

        <div class="flex items-center relative mb-10">
          <div class="border-t border-gray-200 z-20 w-full"></div>

          <div class="rounded-full bg-navy z-30 p-2 inline-block absolute mx-8">
            <svg
              class="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="px-8 pb-4">
          <h2 class="text-gray-800 text-xl font-bold">{{ item.name }}</h2>
          <p class="text-gray-600 text-xs">
            {{ item.description.substring(0, 100) + ".." }}
          </p>
          <button
            type="button"
            @click="downloadWithAxios(item.file, item.slug, item.id, item.name)"
            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>

            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Inisialisasi
import Header from "@/components/HeaderView.vue";
import PageSimple from "@/components/SimplePagination.vue";
import { toRefs, onMounted, reactive, watchEffect } from "vue";
import axios from "axios";
// Get Data API
let url = "http://localhost:8000/api/raker";

export default {
  name: "RencanaKerja",
  components: { Header, PageSimple },

  setup() {
    const state = reactive({
      items: [],
      lastPage: 1,
      pages: 1,
      meta: "",
      search: "",
      disabled: null,
      loading: false,
      pass: "",
      errMsg: "",
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

    const downloadWithAxios = (url, slug, id, name) => {
      if (state.pass == id) {
        // key != key ? (state.loading = true) : "";
        axios(
          {
            url: "http://localhost:8000/api/raker/" + url, //your url
            method: "GET",
            responseType: "blob", // important
          },
          {
            headers: { "Access-Control-Allow-Origin": "*" },
          }
        )
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${slug}.pdf`); //or any other extension
            document.body.appendChild(link);
            link.click();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        state.errMsg = name;
        setTimeout(() => (state.errMsg = ""), 5000);
      }
    };

    onMounted(() => {
      getData();
    });

    watchEffect(() => {
      getData();
    });

    return { ...toRefs(state), getData, downloadWithAxios };
  },
};
</script>

<style></style>
