<template>
  <router-link
    :to="{
      name: 'Detail Kegiatan',
      params: { id: item.id },
    }"
    class="p-6 mb-3 w-full lg:w-[49%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate__animated animate__fadeIn"
  >
    <!-- tanggal upload content/agenda -->
    <div class="flex justify-between mb-3">
      <p class="font-bold uppercase text-link text-sm">{{ item.category }}</p>
      <p cla ss="font-bold uppercase text-link text-sm">
        {{ Tanggal(item.created_at) }}
      </p>
    </div>
    <!-- end tanggal upload content/agenda -->
    <!-- <a href="#"> -->
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ item.title }}
    </h5>
    <!-- </a> -->
    <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
      {{ item.description.substring(0, 150) + ".." }}
    </p>
  </router-link>
</template>

<script>
import moment from "moment";
export default {
  name: "AsycListKegiatan",
  props: {
    item: Object,
  },

  setup() {
    const Tanggal = (date) => {
      moment.locale("id");
      return moment(date, "YYYYMMDD").fromNow();
    };

    return {
      Tanggal,
    };
  },
};
</script>

<style></style>
