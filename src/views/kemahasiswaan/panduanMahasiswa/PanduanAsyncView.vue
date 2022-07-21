<template>
  <router-link
    :to="{
      name: 'PanduanMahasiswa.DetailPanduan',
      params: { slug: item.slug },
    }"
    class="w-full mb-3 lg:w-[49%] rounded-lg border border-gray-200 bg-white hover:shadow-sm"
  >
    <div class="text-right p-4">
      <span class="text-xs text-gray-500 tracking-widest uppercase">Artikel</span>
    </div>

    <div class="flex items-center relative mb-10">
      <div class="border-t border-gray-200 z-20 w-full"></div>
      <div class="rounded-full bg-navy z-30 p-2 inline-block absolute mx-8">
        <svg
          class="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      </div>
    </div>
    <div class="px-8 pb-4">
      <h2 class="text-gray-800 text-xl font-bold">{{ item.name }}</h2>
      <p class="text-gray-600 text-xs">
        {{ item.description.substring(0, 40) + ".." }}
      </p>
    </div>
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
