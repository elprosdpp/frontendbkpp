<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <div>
        <h1 class="text-xl text-dBlue font-bold">Panduan Kemahasiswaan</h1>
        <p class="text-sm">Memuat Semua Komponen Panduan Kemahasiswaan</p>
      </div>
    </div>
    <!-- End Header Panel -->

    <div class="border-b mb-5"></div>

    <!-- Content Data Panduan Render -->
    <router-view></router-view>
    <!-- End Content Data Panduan Render -->
  </div>
</template>

<script>
export default {
  name: "PanduanMahasiswa",
};
</script>

<style></style>
