<template>
  <!-- Slider  -->
  <swiper
    :navigation="true"
    :loop="true"
    :modules="modules"
    class="mySwiper container mx-auto mt-5 rounded-lg"
  >
    <swiper-slide v-for="i in images" :key="i">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1 class="text-sm lg:text-5xl font-bold">{{ i.title }}</h1>
        <p class="text-sm lg:text-xl mb-1 lg:mb-3">{{ i.caption }}</p>
        <router-link
          to="/profil"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </router-link>
      </div>
      <img :src="i.img" class="h-96 object-cover lg:h-auto lg:object-contain" />
    </swiper-slide>
  </swiper>
  <!-- End Slider -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  // Looping data Slider
  data() {
    return {
      images: [
        {
          id: "1",
          img: "https://via.placeholder.com/1920x700",
          title: "Slide 1",
          caption: "ini adalah slide 1",
        },
        {
          id: "2",
          img: "https://via.placeholder.com/1920x700",
          title: "Slide 2",
          caption: "ini adalah slide 2",
        },
        {
          id: "3",
          img: "https://via.placeholder.com/1920x700",
          title: "Slide 3",
          caption: "ini adalah slide 3",
        },
      ],
    };
  },
  // End Looping data Slider

  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style>
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: FontAwesome;
  font-size: 32px;
  color: aliceblue;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "\f137";
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: "\f138";
}
</style>
