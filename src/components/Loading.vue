<template>
  <!-- <div class="flex justify-between flex-wrap"> -->
  <div
    class="p-6 mb-3 w-full lg:w-[49%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <!-- tanggal upload content/agenda -->
    <!-- <div class="flex justify-between mb-3">
      <div class="w-10 h-10 rounded-lg bg-link card-pulse"></div>
      <div class="w-44 h-10 rounded-lg bg-link card-pulse"></div>
    </div> -->
    <!-- end tanggal upload content/agenda -->

    <div class="mb-2 w-full rounded-lg h-10 bg-link card-pulse"></div>
    <div class="mb-2 w-full rounded-lg h-10 bg-link card-pulse"></div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "LoadingAgenda",
  props: {
    item: Object,
  },
};
</script>

<style>
.card-pulse {
  animation: pulse-bg 1s infinite;
}
@keyframes pulse-bg {
  0% {
    background-color: rgb(206, 205, 205);
  }
  50% {
    background-color: #a5a5a5;
  }
  100% {
    background-color: rgb(206, 205, 205);
  }
}
</style>
