<template>
  <div class="container grid grid-rows-4 grid-flow-row gap-2">
    <div
      v-for="(img, index) in imgs"
      :key="index"
      class="w-full object-cover"
      @click="() => showImg(index)"
    >
      <img :src="typeof img === 'string' ? img : img.src" />
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
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },

  data() {
    return {
      imgs: [
        "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        "https://via.placeholder.com/450.png/",
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
