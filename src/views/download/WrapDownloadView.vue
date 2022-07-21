<template>
  <div class="">
    <!-- Panel Header -->
    <PanelHeader judul="Download" caption="Memuat Semua Menu Download" />

    <!-- Panel Content -->
    <div class="container mx-auto py-20">
      <div class="flex flex-wrap lg:flex-nowrap justify-center px-[1.5rem]">
        <!-- Sidebar -->
        <Sidebar
          :items="dataItem"
          header="Download"
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
          name: "Undang-Undang",
          link: "/download/undangUndang",
          icon: "fa-solid fa-book",
        },
        {
          id: "2",
          name: "Peraturan-Peraturan",
          link: "/download/peraturanPeraturan",
          icon: "fa-solid fa-book",
        },
        {
          id: "3",
          name: "Surat Edaran",
          link: "/download/suratEdaran",
          icon: "fa-solid fa-newspaper",
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
