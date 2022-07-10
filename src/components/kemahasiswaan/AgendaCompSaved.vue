<template>
  <!-- Main modal -->
  <Modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header>
      <h1>{{ item.title }}</h1>
    </template>
    <template v-slot:body>
      <!-- {{ item.title }}
      {{ item.category }} -->
      <ul>
        <li><img :src="item.image" alt="" /></li>
        <li class="mt-3 mb-3">
          <h1
            class="block w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ item.category }}
          </h1>
        </li>
        <li>{{ item.description }}</li>
      </ul>
    </template>
  </Modal>
  <!-- <div class="flex justify-between flex-wrap"> -->
  <div
    class="p-6 mb-3 w-full lg:w-[49%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate__animated animate__fadeIn"
  >
    <!-- tanggal upload content/agenda -->
    <div class="flex justify-between mb-3">
      <p class="font-bold uppercase text-link text-sm">{{ item.category }}</p>
      <p cla ss="font-bold uppercase text-link text-sm">Rabu, 29 Juni 2022</p>
    </div>
    <!-- end tanggal upload content/agenda -->
    <!-- <a href="#"> -->
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ item.title }}
    </h5>
    <!-- </a> -->
    <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
      {{ item.description }}
    </p>
    <!-- Modal toggle -->
    <button
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      @click="showModal"
    >
      Detail
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
import Modal from "../Modal.vue";
export default {
  name: "AgendaComp",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    // itemClicked: function () {
    //   // this.name = item.itemName;
    //   // this.description = item.desc;
    //   // this.price = item.itemPrice;
    //   this.modal.show();
    // },
  },
};
</script>

<style></style>
