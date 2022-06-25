<template>
  <PanelHeader judul="Profil" caption="Memuat Struktur Organisasi & Tupoksi Bidang" />
  <div class="container mx-auto py-20">
    <div class="flex flex-wrap lg:flex-nowrap justify-center px-[1.5rem]">
      <!-- Sidebar -->
      <Sidebar
        :items="dataItem"
        header="Profil"
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
import PanelHeader from "../Panel.vue";
import Sidebar from "../Sidebar.vue";

export default {
  components: { Sidebar, PanelHeader },
  data() {
    return {
      dataItem: [
        {
          id: "1",
          name: "Struktur BKPP",
          link: "/profil/struktur",
          icon: "fa-solid fa-arrows-down-to-people",
        },
        {
          id: "2",
          name: "Tupoksi Bidang",
          link: "/profil/tupoksi",
          icon: "fa-solid fa-book-open",
        },
      ],
      style: [{}],
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
