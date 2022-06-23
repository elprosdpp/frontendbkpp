<template>
  <carousel></carousel>
  <content></content>
</template>

<script>
import Carousel from "@/components/home/Carousel.vue";
import Content from "@/components/home/Content.vue";
export default {
  components: { Carousel, Content },

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

<style></style>
