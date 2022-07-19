<template>
  <div>
    <h1 class="text-xl text-dBlue font-bold">{{ judul }}</h1>
    <p class="text-sm">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    judul: String,
    caption: String,
  },
};
</script>

<style></style>
