<template>
  <!-- Panel Header -->
  <PanelHeader judul="Berita" caption="Memuat Semua Berita" />

  <!-- Berita Section -->
  <section class="">
    <div class="container mx-auto py-20">
      <!-- Search -->
      <div class="flex flex-wrap justify-between items-center pb-10 pr-0 lg:mx-[43px]">
        <div class="flex">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >Search</label
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
              v-model="search"
              id="default-search"
              class="block p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 lg:w-[25rem]"
              placeholder="Cari Berita"
              required
            />
          </div>
        </div>
        <div>
          <page-simple
            :pages="pages"
            :lastPage="lastPage"
            :disabled="disabled"
            @changepage="getData"
          />
        </div>
      </div>
      <div class="mx-[43px]">
        <span class="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span class="font-semibold text-gray-900 dark:text-white">{{ meta.from }}</span>
          to
          <span class="font-semibold text-gray-900 dark:text-white">{{ meta.to }}</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">{{
            meta.total
          }}</span>
          Entries
        </span>
      </div>
      <!-- Search -->

      <!-- Card Berita -->
      <div class="flex flex-wrap justify-center items-center py-3">
        <div
          v-for="b in items"
          :key="b.id"
          class="w-80 h-[30rem] mb-5 bg-white rounded-lg border-2 border-rBlue shadow-sm cursor-pointer md:mx-3 md:w-96 lg:w-96 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <router-link :to="{ name: 'detailberita', params: { slug: b.slug } }">
            <img
              :src="b.image"
              :alt="b.title"
              class="p-3 w-full h-64 object-cover rounded-[1.2rem]"
            />
          </router-link>

          <div class="p-5">
            <div class="flex items-center mb-2">
              <!-- Author -->
              <h1 class="bg-navy text-white text-xs p-1 rounded-md mr-2">
                {{ b.author }}
              </h1>
              <!-- End Author -->

              <!-- Category -->
              <h1 class="bg-orange-300 text-black text-xs p-1 rounded-md mr-2">
                {{ b.category }}
              </h1>
              <!-- End Category -->

              <!-- Time Upload Left -->
              <p class="text-xs">● {{ Tanggal(b.created_at) }}</p>
              <!-- End Time Upload Left -->
            </div>
            <router-link :to="{ name: 'detailberita', params: { slug: b.slug } }">
              <!-- Title News -->
              <h5
                class="mb-2 text-md md:text-md lg:text-2xl font-bold tracking-tight text-dBlue"
              >
                {{ b.title.substring(0, 40) + ".." }}
              </h5>
              <!-- End Title News -->
            </router-link>

            <!-- Content in Limit Word -->
            <p
              class="mb-3 text-xs md:text-sm lg:text-sm font-normal text-gray-700 dark:text-gray-400"
            >
              {{ b.description.substring(0, 100) + ".." }}
            </p>
            <!-- End Content in Limit Word -->
          </div>
        </div>
      </div>
      <!-- End Card Berita -->
    </div>
  </section>
</template>

<script>
// Inisialisasi
import Header from "@/components/HeaderView.vue";
import PageSimple from "@/components/SimplePagination.vue";
import { toRefs, onMounted, reactive, watchEffect, defineAsyncComponent } from "vue";
import axios from "axios";
import PanelHeader from "@/components/Panel.vue";
import moment from "moment";

// Get Data API
let url = "http://localhost:8000/api/news";

export default {
  name: "BeritaView",
  components: { Header, PanelHeader, PageSimple },

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

    const Tanggal = (date) => {
      moment.locale("id");
      return moment(date).startOf("hour").fromNow();
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
