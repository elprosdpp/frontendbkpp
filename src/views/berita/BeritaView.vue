<template>
  <!-- Panel Header -->
  <PanelHeader judul="Berita" caption="Memuat Semua Berita" />

  <!-- Berita Section -->
  <section class="">
    <div class="container mx-auto py-20">
      <!-- Search -->
      <div class="flex flex-wrap justify-end items-center pb-10 pr-0 lg:pr-[43px]">
        <div class="mr-5"><h1>Search :</h1></div>
        <div>
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
              type="text"
              v-model="search"
              id="default-search"
              class="block p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 lg:w-[25rem]"
              placeholder="Cari Berita"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cari
            </button>
          </div>
        </div>
      </div>
      <!-- Search -->

      <!-- Card Berita -->
      <div class="flex flex-wrap justify-center items-center py-3">
        <div
          v-for="b in items"
          :key="b.id"
          class="w-80 mb-5 bg-white rounded-lg border-2 border-rBlue shadow-sm cursor-pointer md:mx-3 md:w-96 lg:w-96 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <router-link :to="{ name: 'detailberita', params: { slug: b.slug } }">
            <img
              :src="b.img"
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
              <p class="text-xs">● 4 min ago</p>
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
import PanelHeader from "@/components/Panel.vue";
import dataBerita from "@/views/berita/berita.json";

export default {
  name: "BeritaView",
  components: { PanelHeader },
  data() {
    return {
      dataItem: dataBerita,
      search: "",
    };
  },

  computed: {
    items() {
      return this.dataItem.filter((b) =>
        b.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "BKPP UNW";
      },
    },
  },
};
</script>

<style></style>
