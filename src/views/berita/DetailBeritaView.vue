<template>
  <div id="top" class="flex items-center h-72 bg-gray-50 bg-waves bg-center bg-no-repeat">
    <div class="container w-1/2 mx-auto p-5 -mt-[5.5rem]">
      <p class="text-sm text-center mb-2">{{ berita.published }}</p>
      <h1 class="text-2xl text-center font-bold text-dBlue uppercase">
        {{ berita.title }}
      </h1>
    </div>
  </div>
  <div class="px-5">
    <div class="flex flex-wrap justify-center mb-4">
      <img
        :src="berita.img"
        :alt="berita.title"
        class="w-[70%] mb-5 -mt-[7rem] rounded-lg"
      />
    </div>
    <div class="description text-justify px-[14rem] pb-20">
      <p class="text-lg">
        {{ berita.description }}
      </p>

      <hr class="my-10" />
      <button
        type="button"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {{ berita.category }}
      </button>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import dataBerita from "@/views/berita/berita.json";

export default {
  name: "DetailBerita",
  setup() {
    const route = useRoute();
    const berita = computed(() => {
      return dataBerita.filter((a) => a.slug === route.params.slug)[0];
    });
    return { berita };
  },

  // methods: {
  //   scrollBehavior() {
  //     document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  //   },
  // },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || `${this.berita.title} - BKPP UNW`;
      },
    },
  },
};
</script>
