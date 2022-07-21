<template>
  <!-- <div class="flex justify-between flex-wrap"> -->
  <div class="mb-3 w-full">
    <div class="mb-5 w-1/2 rounded-lg h-8 bg-link card-pulse"></div>
    <div class="mb-2 w-full rounded-lg h-5 bg-link card-pulse"></div>
    <div class="mb-2 w-full rounded-lg h-5 bg-link card-pulse"></div>
    <div class="mb-2 w-full rounded-lg h-5 bg-link card-pulse"></div>
    <div class="mb-2 w-full rounded-lg h-5 bg-link card-pulse"></div>
    <div class="mb-2 w-2/3 rounded-lg h-5 bg-link card-pulse"></div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "LoadingDetail",
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
