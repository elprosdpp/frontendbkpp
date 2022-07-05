<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <!-- Button -->
      <li v-if="pagination.current_page > 1">
        <button
          type="button"
          @click.prevent="change(pagination.current_page - 1)"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
      </li>
      <!-- End Button -->

      <!-- Index Halaman Sesuai Total Page -->
      <li v-for="page in pages" :key="page">
        <button
          type="button"
          :class="{ activePage: page == pagination.current_page }"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click.stop="change(page)"
        >
          {{ page }}
        </button>
      </li>
      <!-- End Index Halaman Sesuai Total Page -->

      <!-- Button -->
      <li v-if="pagination.current_page < pagination.last_page">
        <button
          type="button"
          @click.prevent="change(pagination.current_page + 1)"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </li>
      <!-- End Button -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return null;
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pages = [];
      for (let page = from; page <= to; page++) {
        pages.push(page);
      }
      return pages;
    },
  },
  methods: {
    change: function (page) {
      this.pagination.current_page = page;
      this.$emit("paginate");
    },
  },
};
</script>
