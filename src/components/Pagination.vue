<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <!-- Button -->
      <li>
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Firts
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
      </li>
      <!-- End Button -->

      <!-- Index Halaman Sesuai Total Page -->
      <li v-for="page in pages" :key="page.name">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ activePage: isPageActive(page.name) }"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {{ page.name }}
        </button>
      </li>
      <!-- End Index Halaman Sesuai Total Page -->

      <!-- Button -->
      <li>
        <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Last
        </button>
      </li>
      <!-- End Button -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      value: [Number, String],
      required: false,
    },
    perPage: {
      value: [Number, String],
      required: false,
    },
    currentPage: {
      type: Number,
      required: false,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        const start = this.totalPages - (this.maxVisibleButtons - 1);

        if (start === 0) {
          return 1;
        } else {
          return start;
        }
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },

    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },

  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style></style>
