<template>
  <div class="">
    <!-- Panel Header -->
    <PanelHeader
      judul="Perencanaan Pengembangan"
      caption="Memuat Semua Menu Perencanaan Pengembangan"
    />

    <!-- Panel Content -->
    <div class="container mx-auto py-20">
      <div class="flex flex-wrap lg:flex-nowrap justify-center px-[1.5rem]">
        <!-- Sidebar -->
        <Sidebar
          :items="dataItem"
          header="Perencanaan Pengembangan"
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
          name: "Renstra Universitas",
          link: "/rencanaPengembangan/renstraUniversitas",
          icon: "fa-solid fa-file",
        },
        {
          id: "2",
          name: "Rencana Kerja Universitas",
          link: "/rencanaPengembangan/rencanaKerja",
          icon: "fa-solid fa-list",
        },
        {
          id: "3",
          name: "Monev Kegiatan & Anggaran",
          link: "/rencanaPengembangan/monevKegiatan",
          icon: "fa-solid fa-list-check",
        },
        {
          id: "4",
          name: "Legalitas PT & PS",
          link: "/rencanaPengembangan/legalitas",
          icon: "fa-solid fa-file",
        },
        {
          id: "5",
          name: "SIDOAKRE",
          link: "/rencanaPengembangan/sidoakre",
          icon: "fa-solid fa-up-right-from-square",
        },
      ],
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "BKAPP UNW";
      },
    },
  },
};
</script>

<style lang="css" scoped></style>
