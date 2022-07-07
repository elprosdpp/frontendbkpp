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
// import axios from "axios";
export default {
  name: "OrganisasiMahasiswa",
  components: { Pagination, loadingAgenda },
  data() {
    return {
      currentPage: 1,
      // items: [],
      // total: "",
      // perPage: "",
    };
  },

  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      // this.loading = true; //the loading begin
      //   axios
      //     .get(`http://localhost:8000/api/blog?page=${page}`)
      //     .then((response) => {
      //       this.total = response.data.meta.total;
      //       this.perPage = response.data.meta.per_page;
      //       this.items = response.data;
      //     })
      //     .catch((e) => {
      //       this.error = "Data Tidak Ditemukan!";
      //     })
      //     .finally(() => (this.loading = false)); // set loading to false when request finish
      // },
    },
  },
};
</script>

<style></style>
