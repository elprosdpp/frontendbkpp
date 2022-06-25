<template>
  <!-- Panel Header -->
  <PanelHeader judul="Berita" caption="Memuat Semua Berita" />

  <!-- Panel Content -->
  <div class="container mx-auto py-20">
    <div class="flex flex-wrap lg:flex-nowrap justify-center px-[1.5rem]">
      <h1>Hallo Ini Halaman Berita 👋</h1>
    </div>
  </div>
</template>

<script>
import PanelHeader from "@/components/Panel.vue";
export default {
  components: { PanelHeader },
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
