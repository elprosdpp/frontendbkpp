<template>
  <!-- Carousel Section -->
  <carousel :images="images"></carousel>

  <!-- Tautan Logo Section -->
  <logo></logo>

  <!-- Card Bagian Section -->
  <section class="">
    <div class="container mx-auto py-20">
      <!-- Heading Text 1 -->
      <div class="text-center mb-12">
        <h1 class="font-[Sora] text-2xl text-dBlue font-bold">BAGIAN DARI BKAPP UNW</h1>
        <div class="flex justify-center m-2">
          <span class="border-4 border-navy w-14"></span>
        </div>
      </div>
      <!-- End Heading Text 1 -->

      <!-- Card Bagian -->
      <div class="flex flex-col md:flex-row lg:flex-row justify-center items-center py-3">
        <router-link
          to="/kemahasiswaan"
          class="flex flex-col justify-center items-center cursor-pointer w-80 h-80 mb-5 rounded-lg border-2 border-rBlue lg:w-1/4 lg:h-80 md:mr-5 md:ml-5 lg:mr-5 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <img class="w-40" src="@/assets/img/mahasiswa.svg" alt="" />
          <h1 class="text-xl text-center text-dBlue mt-3 font-semibold">
            Kemahasiswaan & Alumni
          </h1>
          <p class="text-sm text-center text-dLink">infomasi kemahasiswaan & alummi</p>
        </router-link>
        <div
          class="flex flex-col justify-center items-center cursor-pointer w-80 h-80 mb-5 rounded-lg border-2 border-rBlue lg:w-1/4 lg:h-80 md:mr-5 lg:mr-5 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <img class="w-40" src="@/assets/img/humas.svg" alt="" />
          <h1 class="text-xl text-center text-dBlue mt-3 font-semibold">
            Protokoler & Humas
          </h1>
          <p class="text-sm text-dLink">infomasi protokoler & humas</p>
        </div>
        <div
          class="flex flex-col justify-center items-center cursor-pointer w-80 h-80 mb-5 rounded-lg border-2 border-rBlue lg:w-1/4 lg:h-80 md:mr-5 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <img class="w-40" src="@/assets/img/rencana.svg" alt="" />
          <h1 class="text-xl text-center text-dBlue mt-3 font-semibold">
            Perencanaan & Pengembangan
          </h1>
          <p class="text-sm text-center text-dLink">
            infomasi perencanaan & pengembangan
          </p>
        </div>
      </div>
      <!-- End Card Bagian -->
    </div>
  </section>

  <!-- Aplikasi SIDOAKRE Section -->
  <section class="bg-gray-50 bg-waves bg-cover bg-center bg-no-repeat">
    <div class="container mx-auto py-20 relative z-20">
      <!-- SIDOAKRE -->
      <div class="flex flex-wrap lg:flex-nowrap justify-center items-center px-[2.5rem]">
        <img
          src="@/assets/img/sidoakre.png"
          class="w-[38rem] mb-5 shadow-md lg:mx-3 lg:mr-10"
          alt=""
        />
        <div class="flex flex-col">
          <p class="mb-3 text-navy font-semibold">SIDOAKRE</p>
          <h1 class="text-5xl font-semibold mb-3">Sistem Informasi Dokumen Akreditasi</h1>
          <p class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae explicabo
            autem nam nulla, accusantium similique iste voluptatum tempora qui?
          </p>
          <a
            href="#"
            class="inline-flex w-[10rem] items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Login Sekarang
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
          </a>
        </div>
      </div>
      <!-- END SIDOAKRE -->
    </div>
  </section>

  <!-- Berita Section -->
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
      <div
        class="flex flex-col md:flex-row lg:flex-row justify-center items-center py-3 px-[2.5rem]"
      >
        <div
          class="w-80 mb-5 bg-white rounded-lg border-2 border-rBlue shadow-sm cursor-pointer md:mx-3 md:w-96 lg:w-96 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <a href="#">
            <img
              class="p-3 rounded-[1.2rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <div class="flex items-center mb-2">
              <!-- Author -->
              <h1 class="bg-navy text-white text-xs p-1 rounded-md mr-2">Admin</h1>
              <!-- End Author -->

              <!-- Category -->
              <h1 class="bg-orange-300 text-black text-xs p-1 rounded-md mr-2">
                informasi
              </h1>
              <!-- End Category -->

              <!-- Time Upload Left -->
              <p class="text-xs">● 4 min ago</p>
              <!-- End Time Upload Left -->
            </div>
            <a href="#">
              <!-- Title News -->
              <h5
                class="mb-2 text-md md:text-md lg:text-2xl font-bold tracking-tight text-dBlue"
              >
                Noteworthy technology acquisitions 2021
              </h5>
              <!-- End Title News -->
            </a>

            <!-- Content in Limit Word -->
            <p
              class="mb-3 text-xs md:text-sm lg:text-sm font-normal text-gray-700 dark:text-gray-400"
            >
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
            </p>
            <!-- End Content in Limit Word -->
          </div>
        </div>
        <div
          class="w-80 mb-5 bg-white rounded-lg border-2 border-rBlue shadow-sm cursor-pointer md:mx-3 md:w-96 lg:w-96 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <a href="#">
            <img
              class="p-3 rounded-[1.2rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <div class="flex items-center mb-2">
              <!-- Author -->
              <h1 class="bg-navy text-white text-xs p-1 rounded-md mr-2">Admin</h1>
              <!-- End Author -->

              <!-- Category -->
              <h1 class="bg-orange-300 text-black text-xs p-1 rounded-md mr-2">
                informasi
              </h1>
              <!-- End Category -->

              <!-- Time Upload Left -->
              <p class="text-xs">● 4 min ago</p>
              <!-- End Time Upload Left -->
            </div>
            <a href="#">
              <!-- Title News -->
              <h5
                class="mb-2 text-md md:text-md lg:text-2xl font-bold tracking-tight text-dBlue"
              >
                Noteworthy technology acquisitions 2021
              </h5>
              <!-- End Title News -->
            </a>

            <!-- Content in Limit Word -->
            <p
              class="mb-3 text-xs md:text-sm lg:text-sm font-normal text-gray-700 dark:text-gray-400"
            >
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
            </p>
            <!-- End Content in Limit Word -->
          </div>
        </div>
        <div
          class="w-80 mb-5 bg-white rounded-lg border-2 border-rBlue shadow-sm cursor-pointer md:mx-3 md:w-96 lg:w-96 hover:border-navy hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <a href="#">
            <img
              class="p-3 rounded-[1.2rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <div class="flex items-center mb-2">
              <!-- Author -->
              <h1 class="bg-navy text-white text-xs p-1 rounded-md mr-2">Admin</h1>
              <!-- End Author -->

              <!-- Category -->
              <h1 class="bg-orange-300 text-black text-xs p-1 rounded-md mr-2">
                informasi
              </h1>
              <!-- End Category -->

              <!-- Time Upload Left -->
              <p class="text-xs">● 4 min ago</p>
              <!-- End Time Upload Left -->
            </div>
            <a href="#">
              <!-- Title News -->
              <h5
                class="mb-2 text-md md:text-md lg:text-2xl font-bold tracking-tight text-dBlue"
              >
                Noteworthy technology acquisitions 2021
              </h5>
              <!-- End Title News -->
            </a>

            <!-- Content in Limit Word -->
            <p
              class="mb-3 text-xs md:text-sm lg:text-sm font-normal text-gray-700 dark:text-gray-400"
            >
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
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
import Carousel from "@/components/home/Carousel.vue";
import Logo from "@/components/home/TautanLogo.vue";

export default {
  components: { Logo, Carousel },

  // Looping data Slider
  data() {
    return {
      images: [
        {
          id: "1",
          img:
            "https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE",
          title: "Slide 1",
          caption: "ini adalah slide 1",
        },
        {
          id: "2",
          img:
            "https://i.picsum.photos/id/585/1920/700.jpg?hmac=10q-ASfYk7v4FtL0uTBQHrcXo43jik7l1fPG1cuBJU8",
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

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "BKPP UNW";
      },
    },
  },
};
</script>
