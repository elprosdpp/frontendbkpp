<template>
  <router-link
    :to="{
      name: 'PanduanMahasiswa.DetailPanduan',
      params: { slug: item.slug },
    }"
    class="p-6 mb-3 w-full lg:w-[49%] bg-gradient-to-br from-dBlue to-blue-500 rounded-lg border hover:bg-gradient-to-bl border-gray-200 shadow-md animate__animated animate__fadeIn"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
      {{ item.name }}
    </h5>
    <!-- </a> -->
    <p class="mb-3 text-sm font-normal text-white dark:text-gray-400">
      {{ item.description.substring(0, 40) + ".." }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "PanduanAsync",
  props: {
    item: Object,
  },
};
</script>

<style></style>
