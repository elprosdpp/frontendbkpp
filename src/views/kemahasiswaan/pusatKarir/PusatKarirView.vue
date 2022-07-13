<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <div>
        <h1 class="text-xl text-dBlue font-bold">Pusat Karir</h1>
        <p class="text-sm">Memuat Semua Komponen Pusat Karir</p>
      </div>
      <div class="">
        <label
          for="default-search"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Filter Menu</label
        >
        <button
          class="text-dBlue outline outline-2 outline-rBlue font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
          @click.prevent="toggleDropdown"
          @blur="close"
        >
          Menu Pusat Karir
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          v-show="isOpen"
          id="dropdown"
          class="z-50 block bg-white divide-y divide-gray-100 rounded shadow-md"
          style="position: absolute; width: 13rem; transform: translate(2px, 11px)"
        >
          <ul class="py-1 text-sm text-dLink font-semibold" v-if="isOpen">
            <li v-for="item in items" :key="item.id">
              <router-link
                :to="item.link"
                class="block uppercase px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >{{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Header Panel -->

    <div class="border-b mb-5"></div>

    <router-view />
    <!-- End Content Render -->
  </div>
</template>

<script>
export default {
  name: "PusatKarir",

  // setup() {

  // }
};
</script>

<style></style>
