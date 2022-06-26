<template>
  <section class="">
    <div class="container mx-auto py-20">
      <!-- Heading Text 2 -->
      <div class="text-center mb-12">
        <h1 class="font-[Sora] text-2xl text-dBlue font-bold">BERITA TERKINI</h1>
        <div class="flex justify-center m-2">
          <span class="border-4 border-navy w-14"></span>
        </div>
      </div>
      <!-- End Heading Text 2 -->

      <!-- Card Berita -->
      <div class="flex flex-wrap justify-center items-center py-3">
        <div
          v-for="b in items"
          :key="b.id"
          class="w-80 mb-5 bg-white rounded-lg border-2 border-rBlue shadow-sm cursor-pointer md:mx-3 md:w-96 lg:w-96 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <router-link :to="{ name: 'detailberita', params: { slug: b.slug } }">
            <img
              class="p-3 w-full h-64 object-cover rounded-[1.2rem]"
              :src="b.img"
              :alt="b.title"
            />
          </router-link>

          <div class="p-5">
            <div class="flex items-center mb-2">
              <!-- Author -->
              <h1 class="bg-navy text-white text-xs p-1 rounded-md mr-2">
                {{ b.author }}
              </h1>
              <!-- End Author -->

              <!-- Category -->
              <h1 class="bg-orange-300 text-black text-xs p-1 rounded-md mr-2">
                {{ b.category }}
              </h1>
              <!-- End Category -->

              <!-- Time Upload Left -->
              <p class="text-xs">● 4 min ago</p>
              <!-- End Time Upload Left -->
            </div>
            <router-link :to="{ name: 'detailberita', params: { slug: b.slug } }">
              <!-- Title News -->
              <h5
                class="mb-2 text-md md:text-md lg:text-2xl font-bold tracking-tight text-dBlue"
              >
                {{ b.title }}
              </h5>
              <!-- End Title News -->
            </router-link>

            <!-- Content in Limit Word -->
            <p
              class="mb-3 text-xs md:text-sm lg:text-sm font-normal text-gray-700 dark:text-gray-400"
            >
              {{ b.description }}
            </p>
            <!-- End Content in Limit Word -->
          </div>
        </div>
      </div>
      <!-- End Card Berita -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Berita",
  props: {
    items: Object,
  },
};
</script>
