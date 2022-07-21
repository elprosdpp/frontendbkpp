<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header
        judul="Monev Kegiatan & Anggaran"
        caption="Memuat Semua Dokumen Monev Kegiatan & Anggaran"
      />
    </div>

    <div class="border-b mb-5"></div>
  </div>
</template>

<script>
// Inisialisasi
import Header from "@/components/HeaderView.vue";
export default {
  name: "MonevKegiatanAnggaran",
  components: { Header },
};
</script>

<style></style>
