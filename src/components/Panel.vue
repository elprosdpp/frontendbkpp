<template>
  <div class="flex items-center h-48 bg-gray-50 bg-waves bg-center bg-no-repeat">
    <div class="container mx-auto p-5">
      <h1 class="text-2xl font-bold text-dBlue uppercase">{{ judul }}</h1>
      <p>{{ caption }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelHeader",
  props: {
    judul: String,
    caption: String,
  },
};
</script>

<style></style>
