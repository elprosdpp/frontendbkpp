<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header
        judul="Struktur Organisasi BKAPP"
        caption="Memuat Struktur Organisasi BKAPP"
      />
    </div>
    <div class="border-b mb-5"></div>

    <!-- Content Render -->
    <content
      img="https://i.pinimg.com/originals/d1/5e/bd/d15ebd46ece7b9cb9a1e22710bfc3847.png"
      alt="Struktur BKAPP"
    ></content>
  </div>
</template>

<script>
import content from "@/components/Content.vue";
import Header from "@/components/HeaderView.vue";
export default {
  name: "StrukturBKAPP",
  components: { content, Header },
};
</script>

<style></style>
