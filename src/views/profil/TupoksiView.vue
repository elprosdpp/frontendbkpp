<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header judul="Tupoksi Bidang BKAPP" caption="Memuat Tupoksi Bidang BKAPP" />
    </div>
    <div class="border-b mb-5"></div>

    <!-- Content Render -->
    <content
      img="https://ppid.ntbprov.go.id/img/TugasFungsiPPIDNTB.jpeg"
      alt="Tupoksi Bidang"
    ></content>
  </div>
</template>

<script>
import content from "@/components/Content.vue";
import Header from "@/components/HeaderView.vue";
export default {
  name: "TupoksiBidang",
  components: { content, Header },
};
</script>

<style></style>
