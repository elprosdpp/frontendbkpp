<template>
  <div class="container mx-auto py-20">
    <div class="flex flex-wrap lg:flex-nowrap justify-center py-3 px-[2.5rem]">
      <!-- Sidebar -->
      <Sidebar :items="dataItem" header="Profil" class="w-96" />
      <!-- End Sidebar -->

      <!-- Content -->
      <div class="w-[75%] p-3 h-auto mx-5 border-2 border-rBlue rounded-lg">
        <router-view></router-view>
      </div>
      <!-- End Content -->
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/profil/Sidebar.vue";

export default {
  components: { Sidebar },
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
