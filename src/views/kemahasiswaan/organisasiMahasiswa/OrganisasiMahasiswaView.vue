<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <div>
        <h1 class="text-xl text-dBlue font-bold">Organisasi Mahasiswa</h1>
        <p class="text-sm">Memuat Semua Komponen Organisasi Mahasiswa</p>
      </div>
      <div class="">
        <label
          for="default-search"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Filter Ormawa</label
        >
        <button
          class="text-dBlue outline outline-2 outline-rBlue font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
          @click.prevent="toggleDropdown"
          @blur="close"
        >
          Organisasi Mahasiswa
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
                :to="{
                  name: 'OrganisasiMahasiswa.DetailOrmawa',
                  params: { slug: item.slug },
                }"
                class="block uppercase px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >{{ item.slug }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Header Panel -->

    <div class="border-b mb-5"></div>

    <!-- Content in Here -->
    <router-view :key="$route.fullPath"></router-view>
    <!-- End Content in Here -->
  </div>
</template>

<script>
// import Modal from "@/components/Modal.vue";
import axios from "axios";

// Get Data API
let url = "http://localhost:8000/api/ormawa/";

export default {
  name: "OrganisasiMahasiswa",
  // components: { Modal },

  data() {
    return {
      isOpen: false,
      items: [],
    };
  },

  mounted() {
    this.getData();
    // document.addEventListener("click", this.close);
  },

  methods: {
    getData() {
      axios
        .get(url)
        .then((response) => (this.items = response.data.data))
        .catch((error) => console.log(error));
    },

    toggleDropdown(e) {
      this.isOpen = !this.isOpen;
    },

    close(e) {
      setTimeout(() => {
        this.isOpen = false;
      }, 200);
    },
  },
};
</script>

<style>
option {
  background-color: #ffffff;
}
option:before {
  content: ">";
  font-size: 20px;
  display: none;
  padding-right: 10px;
  padding-left: 5px;
  color: #fff;
}
</style>
