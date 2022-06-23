<template>
  <div class="container mx-auto py-20">
    <div class="flex flex-wrap lg:flex-nowrap justify-center py-3 px-[2.5rem]">
      <!-- Sidebar -->
      <Sidebar :items="dataItem" header="Profil" class="w-1/3" />

      <!-- End Sidebar -->

      <!-- Content -->
      <div class="w-full p-3 h-auto mx-5 border-2 border-rBlue rounded-lg">
        <img
          src="https://i.pinimg.com/originals/d1/5e/bd/d15ebd46ece7b9cb9a1e22710bfc3847.png"
          alt="Struktur BKPP"
        />
      </div>
      <TupoksiBidang />
      <!-- End Content -->
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/profil/Sidebar.vue";
import TupoksiBidang from "@/components/profil/TupoksiBidang.vue";
export default {
  components: { Sidebar, TupoksiBidang },
  data() {
    return {
      dataItem: [
        {
          id: "1",
          name: "Struktur BKPP",
          link: "",
          icon: "fa-solid fa-arrows-down-to-people",
        },
        {
          id: "2",
          name: "Tupoksi Bidang",
          link: "tupoksi-bidang",
          icon: "fa-solid fa-book-open",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped></style>
