<template>
  <div class="content">
    <div class="border-b mb-5"></div>

    <!-- Header Panel -->
    <div class="flex flex-wrap justify-between items-center pb-5">
      <Header
        judul="Rencana Kerja Universitas"
        caption="Memuat Semua Dokumen Rencana Kerja Universitas"
      />
    </div>

    <div class="border-b mb-5"></div>

    <div class="cardProtokoler flex justify-between flex-wrap mb-5 mt-5">
      <div
        v-for="item in items"
        :key="item.id"
        class="w-full mb-3 lg:w-[49%] rounded-lg border border-gray-200 bg-white"
      >
        <div class="text-right p-4">
          <span class="text-xs text-gray-500 tracking-widest uppercase">Dokumen</span>
        </div>

        <div class="flex items-center relative mb-10">
          <div class="border-t border-gray-200 z-20 w-full"></div>

          <div class="rounded-full bg-navy z-30 p-2 inline-block absolute mx-8">
            <svg
              class="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="px-8 pb-4">
          <h2 class="text-gray-800 text-xl font-bold">{{ item.name }}</h2>
          <p class="text-gray-600 text-xs">
            {{ item.description.substring(0, 100) + ".." }}
          </p>
          <button
            type="button"
            @click="downloadWithAxios(item.file, item.slug)"
            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>

            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Inisialisasi
import Header from "@/components/HeaderView.vue";
import { toRefs, onMounted, reactive, ref } from "vue";
import axios from "axios";
// Get Data API
let url = "http://localhost:8000/api/raker";

export default {
  name: "RencanaKerja",
  components: { Header },

  setup() {
    const state = reactive({
      items: [],
      loading: false,
    });

    const getData = () => {
      state.loading = true;
      axios
        .get(url)
        .then((response) => {
          state.items = response.data.data;
          state.loading = false;
        })
        .catch((error) => console.log(error));
    };

    const downloadWithAxios = (url, name) => {
      // key != key ? (state.loading = true) : "";
      axios(
        {
          url: "http://localhost:8000/api/raker/" + url, //your url
          method: "GET",
          responseType: "blob", // important
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${name}.pdf`); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(() => {
      getData();
    });

    return { ...toRefs(state), getData, downloadWithAxios };
  },
};
</script>

<style></style>
