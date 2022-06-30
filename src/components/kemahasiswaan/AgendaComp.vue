<template>
  <!-- <div class="flex justify-between flex-wrap"> -->
  <div
    class="p-6 mb-3 w-full lg:w-[49%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <!-- tanggal upload content/agenda -->
    <div class="flex justify-between mb-3">
      <p class="font-bold uppercase text-link text-sm">news</p>
      <p cla ss="font-bold uppercase text-link text-sm">Rabu, 29 Juni 2022</p>
    </div>
    <!-- end tanggal upload content/agenda -->
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ item.title }}
      </h5>
    </a>
    <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
      {{ item.body }}
    </p>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "AgendaComp",
  props: {
    item: Object,
  },
};
</script>

<style></style>
