<template>
  <!-- Panel Header -->
  <PanelHeader judul="Humas" caption="Memuat Semua Menu Kehumasan" />

  <!-- Panel Content -->
  <div class="container mx-auto py-20">
    <div class="flex flex-wrap lg:flex-nowrap justify-center px-[1.5rem]">
      <!-- Sidebar -->
      <Sidebar
        :items="dataItem"
        header="Humas"
        :width="['Sidebar', 'w-96 mb-5 md:w-10/12 lg:w-1/3']"
      />
      <!-- End Sidebar -->

      <!-- Content -->
      <div
        class="w-96 p-3 h-auto border-2 border-rBlue rounded-lg md:w-10/12 lg:w-10/11 lg:mx-5"
      >
        <router-view></router-view>
      </div>
      <!-- End Content -->
    </div>
  </div>
</template>

<script>
import PanelHeader from "@/components/Panel.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar, PanelHeader },
  data() {
    return {
      dataItem: [
        {
          id: "1",
          name: "Agenda Kehumasan",
          link: "/humas/agendaKehumasan",
          icon: "fa-solid fa-list-check",
        },
        {
          id: "2",
          name: "Keprotokoleran",
          link: "/humas/keprotokoleran",
          icon: "fa-solid fa-user",
        },
        {
          id: "3",
          name: "Publikasi Media",
          link: "/humas/publikasiMedia",
          icon: "fa-solid fa-camera",
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
