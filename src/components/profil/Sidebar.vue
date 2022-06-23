<template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 border-2 border-rBlue rounded-lg">
      <h1 class="p-3 text-lg text-dBlue uppercase font-semibold">{{ header }}</h1>
      <hr class="mb-2" />
      <ul class="space-y-2">
        <li v-for="(item, index) in items" :key="index">
          <router-link
            :to="item.link"
            exact
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i :class="item.icon"></i>
            <span class="ml-3">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    items: Object,
    header: String,
  },
};
</script>

<style lang="scss" scoped></style>
