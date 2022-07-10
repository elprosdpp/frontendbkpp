<template>
  <div class="">
    <!-- Panel Header -->
    <PanelHeader judul="Kemahasiswaan" caption="Memuat Semua Menu Kemahasiswan" />

    <!-- Panel Content -->
    <div class="container mx-auto py-20">
      <div class="flex flex-wrap lg:flex-nowrap justify-center px-[1.5rem]">
        <!-- Sidebar -->
        <Sidebar
          :items="dataItem"
          header="Kemahasiswaan"
          :width="['Sidebar', 'w-96 mb-5 md:w-10/12 lg:w-1/3']"
        />
        <!-- End Sidebar -->

        <!-- Content -->
        <div class="w-[23rem] h-auto md:w-10/12 lg:w-10/11 lg:mx-5">
          <router-view></router-view>
        </div>
        <!-- End Content -->
      </div>
    </div>
  </div>
</template>

<script>
import PanelHeader from "@/components/Panel.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  inheritAttrs: false,
  components: { Sidebar, PanelHeader },
  data() {
    return {
      dataItem: [
        {
          id: "1",
          name: "Agenda Kemahasiswaan",
          link: "/kemahasiswaan/agendaMahasiswa",
          icon: "fa-solid fa-list-check",
        },
        {
          id: "2",
          name: "Organisasi Kemahasiswaan",
          link: "/kemahasiswaan/organisasiMahasiswa",
          icon: "fa-solid fa-sitemap",
        },
        {
          id: "3",
          name: "Prestasi Kemahasiswaan",
          link: "/kemahasiswaan/prestasiMahasiswa",
          icon: "fa-solid fa-trophy",
        },
        {
          id: "4",
          name: "Panduan Kemahasiswaan",
          link: "/kemahasiswaan/panduanMahasiswa",
          icon: "fa-solid fa-book",
        },
        {
          id: "5",
          name: "Pusat Karir",
          link: "/kemahasiswaan/pusatKarir",
          icon: "fa-solid fa-up-right-from-square",
        },
        {
          id: "6",
          name: "Pusat Inkubator Bisnis",
          link: "/kemahasiswaan/inkubatorBisnis",
          icon: "fa-solid fa-database",
        },
      ],
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

<style lang="css" scoped></style>
