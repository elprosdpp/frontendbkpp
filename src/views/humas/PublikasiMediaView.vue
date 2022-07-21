<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header :judul="this.$route.name" caption="Memuat Semua Publikasi Media" />
    </div>

    <div class="border-b mb-5"></div>

    <!-- Content Render -->
    <div class="gap-8 columns-3">
      <div v-for="(img, index) in imgs" :key="index" @click="() => showImg(index)">
        <img
          :src="typeof img === 'string' ? img : img.src"
          class="w-full aspect-square mb-6 object-cover"
        />
      </div>
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
// Inisialisasi
import Header from "@/components/HeaderView.vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "PublikasiMedia",
  components: {
    VueEasyLightbox,
    Header,
  },

  data() {
    return {
      imgs: [
        "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        "https://images.unsplash.com/photo-1657881170074-78cbae6d79ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
        "https://via.placeholder.com/450.png/",
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        {
          src:
            "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "this is title",
        },
      ],
      visible: false,
      index: 0, // default: 0
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style></style>
