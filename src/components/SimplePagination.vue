<template>
  <div class="inline-flex mt-2 xs:mt-0">
    <!-- Buttons -->
    <button
      type="button"
      class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      :disabled="pages > 1 ? disabled : ''"
      @click="getData(pages - 1)"
    >
      &laquo; Previous
    </button>
    <button
      type="button"
      class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      :disabled="pages < lastPage ? disabled : ''"
      @click="getData(pages + 1)"
    >
      Next &raquo;
    </button>
  </div>
</template>

<script>
export default {
  name: "SimplePagination",
  props: {
    pages: Number,
    disabled: String,
    lastPage: Number,
  },

  setup(props, { emit }) {
    const getData = (pages) => {
      emit("changepage", pages);
    };
    return {
      getData,
    };
  },
};
</script>

<style></style>
