<template>
  <h1>Halaman Organisasi Mahasiswa</h1>
  <loadingAgenda />
  <!-- Modal toggle -->
  <button
    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    @click="isOpen = true"
  >
    Toggle modal
  </button>
  <!-- Main modal -->
  <div
    id="modalEl"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-gray-700 bg-opacity-50"
    v-show="isOpen"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
          <button
            type="button"
            @click="isOpen = false"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer
            privacy laws for its citizens, companies around the world are updating their
            terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
            effect on May 25 and is meant to ensure a common set of data rights in the
            European Union. It requires organizations to notify users as soon as possible
            of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
        >
          <button
            @click="isOpen = false"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Var dump data -->
  <!--   <pre>
    {{$data | json}}
  </pre> -->
  <div class="flex justify-center py-24">
    <Pagination
      :totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import loadingAgenda from "@/components/kemahasiswaan/LoadingAgenda.vue";
import Modal from "@/components/Modal.vue";
// import axios from "axios";
export default {
  name: "OrganisasiMahasiswa",
  components: { Pagination, loadingAgenda, Modal },
  data() {
    return {
      currentPage: 1,
      active: 0,
      showModal: false,
      isOpen: false,
      cars: [
        {
          id: "1",
          title: "Default",
          description: "lorem lorem lorem.",
        },
        {
          id: "2",
          title: "Citroen",
          description: "Lorem ipsum.",
        },
        {
          id: "3",
          title: "Honda",
          description: "Lorem ipsum lorem lorem.",
        },
      ],
      // items: [],
      // total: "",
      // perPage: "",
    };
  },

  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      // this.loading = true; //the loading begin
      //   axios
      //     .get(`http://localhost:8000/api/blog?page=${page}`)
      //     .then((response) => {
      //       this.total = response.data.meta.total;
      //       this.perPage = response.data.meta.per_page;
      //       this.items = response.data;
      //     })
      //     .catch((e) => {
      //       this.error = "Data Tidak Ditemukan!";
      //     })
      //     .finally(() => (this.loading = false)); // set loading to false when request finish
      // },
    },
    modalOpen: function (i) {
      this.showModal = true;
      return (this.active = i);
    },
    itemClicked: function () {
      // this.name = item.itemName;
      // this.description = item.desc;
      // this.price = item.itemPrice;
      $("#defaultModal").modal.show();
    },
  },
};
</script>

<style></style>
