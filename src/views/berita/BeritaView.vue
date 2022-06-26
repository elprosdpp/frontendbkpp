<template>
  <!-- Panel Header -->
  <PanelHeader judul="Berita" caption="Memuat Semua Berita" />

  <!-- Berita Section -->
  <BeritaComp :items="itemBerita"></BeritaComp>
</template>

<script>
import PanelHeader from "@/components/Panel.vue";
import BeritaComp from "@/components/berita/Berita.vue";
import dataBerita from "@/views/berita/berita.json";

export default {
  name: "BeritaView",
  components: { PanelHeader, BeritaComp },
  data() {
    return {
      itemBerita: dataBerita,
    };
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
