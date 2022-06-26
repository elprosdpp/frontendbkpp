<template>
  <section class="">
    <div class="container mx-auto py-20">Detail Halaman Berita {{ berita.title }}</div>
    <div class="container mx-auto py-20">Detail Halaman Berita {{ berita.author }}</div>
    <div class="container mx-auto py-20">Detail Halaman Berita {{ berita.category }}</div>
    <div class="container mx-auto py-20">
      Detail Halaman Berita {{ berita.description }}
    </div>
    <div class="container mx-auto py-20">Detail Halaman Berita {{ berita.img }}</div>
  </section>
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
