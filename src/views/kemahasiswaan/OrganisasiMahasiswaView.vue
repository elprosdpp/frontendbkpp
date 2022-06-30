<template>
  <h1>Halaman Organisasi Mahasiswa</h1>
  <loadingAgenda />
  <div class="flex justify-center py-24">
    <Pagination
      :totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import loadingAgenda from "@/components/kemahasiswaan/LoadingAgenda.vue";
export default {
  name: "OrganisasiMahasiswa",
  components: { Pagination, loadingAgenda },
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
};
</script>

<style></style>
