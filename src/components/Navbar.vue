<template>
  <!-- Heading Nav -->
  <div class="w-full flex justify-center p-3 bg-navy">
    <h1 class="text-white text-sm text-center">
      Universitas Unggul, Berbudaya Sehat dan, Bereputasi Internasional
    </h1>
  </div>
  <!-- End Heading Nav -->

  <!-- Nav Content -->
  <div class="shadow-sm">
    <nav class="container mx-auto px-3 flex flex-col z-20">
      <div class="flex items-center justify-between">
        <!-- Logo  -->
        <div>
          <router-link to="/" class="flex items-center">
            <img class="w-10 mr-2" src="../assets/img/unw.png" alt="" />
            <div class="flex flex-col justify-start items-start">
              <h1 class="hidden md:hidden lg:block text-sm font-bold text-dLink">
                BIRO KEMAHASISWAAN, ALUMNI, PERENCANAAN DAN PENGEMBANGAN
              </h1>
              <h1 class="hidden md:block lg:block text-sm font-bold text-dLink">
                BKAPP | UNIVERSITAS NGUDI WALUYO
              </h1>
              <h1 class="block md:hidden lg:hidden text-lg font-bold text-dLink">
                BKAPP UNW
              </h1>
            </div>
          </router-link>
        </div>
        <!-- End Logo -->

        <!-- Menu  -->
        <div class="flex items-center py-0">
          <router-link
            to="/"
            class="hidden md:block lg:block px-3 text-link hover:text-hover font-semibold"
          >
            BERANDA
          </router-link>
          <router-link
            to="/profil"
            :class="{ 'router-link-active': subIsActive('/profil') }"
            class="hidden md:block lg:block px-3 text-link hover:text-hover font-semibold"
          >
            PROFIL
          </router-link>
          <router-link
            to="/berita"
            :class="{ 'router-link-active': subIsActive('/berita') }"
            class="hidden md:block lg:block px-3 text-link hover:text-hover font-semibold"
          >
            BERITA
          </router-link>
          <!--Hoverable Link-->
          <div class="hoverable z-50">
            <router-link
              to="/kemahasiswaan"
              :class="{ 'router-link-active': subIsActive(['/kemahasiswaan', '/humas']) }"
              class="relative block py-10 px-3 lg:text-base text-link hover:text-hover font-semibold"
            >
              BKAPP
            </router-link>
            <!-- Hover Mega Menu Auto Hidden In Max-Width 640px -->
            <div
              class="mega-menu mb-16 sm:mb-0 shadow-xl bg-white border-t border-[#E5E5E5]"
            >
              <div class="container mx-auto p-5 text-link mb-8">
                <!-- Head Megamenu -->
                <div class="flex flex-wrap justify-between items-center">
                  <div class="left">
                    <h2 class="font-bold text-sm">LINK BAGIAN BKAPP UNW</h2>
                    <p class="text-1xs">All Menu</p>
                  </div>
                  <!-- Search Form -->
                  <div class="right">
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-link"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                          <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block p-4 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search Resource..."
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Cari
                        </button>
                      </div>
                    </form>
                  </div>
                  <!-- End Search Form -->
                </div>
                <!-- End Head Megamenu -->

                <!-- Main Megamenu -->
                <div class="pt-4 flex flex-wrap">
                  <ul class="w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 class="font-bold text-md text-dBlue text-bold mb-2">
                      Kemahasiswaan
                    </h3>
                    <li>
                      <router-link
                        to="/kemahasiswaan/agendaMahasiswa"
                        :class="{
                          'router-link-active': isActive(
                            '/kemahasiswaan/agendaMahasiswa'
                          ),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Agenda Mahasiswa</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/kemahasiswaan/organisasiMahasiswa"
                        :class="{
                          'router-link-active': isActive(
                            '/kemahasiswaan/organisasiMahasiswa'
                          ),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Organisasi Mahasiswa</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/kemahasiswaan/prestasiMahasiswa"
                        :class="{
                          'router-link-active': isActive(
                            '/kemahasiswaan/prestasiMahasiswa'
                          ),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Prestasi Mahasiswa
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/kemahasiswaan/panduanMahasiswa"
                        :class="{
                          'router-link-active': isActive(
                            '/kemahasiswaan/panduanMahasiswa'
                          ),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Panduan Mahasiswa
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/kemahasiswaan/pusatKarir"
                        :class="{
                          'router-link-active': isActive('/kemahasiswaan/pusatKarir'),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Pusat Karir
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/kemahasiswaan/inkubatorBisnis"
                        :class="{
                          'router-link-active': isActive(
                            '/kemahasiswaan/inkubatorBisnis'
                          ),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Pusat Inkubator Bisnis
                      </router-link>
                    </li>
                  </ul>
                  <ul class="w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 class="font-bold text-md text-dBlue text-bold mb-2">Humas</h3>
                    <li>
                      <router-link
                        to="/humas/agendaKehumasan"
                        :class="{
                          'router-link-active': isActive('/humas/agendaKehumasan'),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Agenda Kehumasan
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/humas/keprotokoleran"
                        :class="{
                          'router-link-active': isActive('/humas/keprotokoleran'),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Keprotokoleran
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/humas/publikasiMedia"
                        :class="{
                          'router-link-active': isActive('/humas/publikasiMedia'),
                        }"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Publikasi Media
                      </router-link>
                    </li>
                  </ul>
                  <ul class="w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 class="font-bold text-md text-dBlue text-bold mb-2">
                      Perencanaan Pengembangan
                    </h3>
                    <li>
                      <a
                        href="#"
                        class="block p-3 text-link hover:text-hover hover:font-bold"
                        >Renstra Universitas</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Rencana Kerja UNW</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Monev Kegiatan & Anggaran</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Legalitas PT & PS</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >SIDOAKRE</a
                      >
                    </li>
                  </ul>
                  <ul class="w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 class="font-bold text-md text-dBlue text-bold mb-2">Download</h3>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Undang-Undang</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Peraturan-Preaturan</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Surat Edaran</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- End Main Megamenu -->
              </div>
            </div>
            <!-- End Hover Mega Menu Auto Hidden In Max-Width 640px -->

            <!-- Mobile Menu -->
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              class="mobile bg-white border-t border-[#E5E5E5] shadow-xl"
            >
              <!-- Menu Mobile 0 -->
              <h2 id="accordion-collapse-heading-0">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500"
                  data-accordion-target="#accordion-collapse-body-0"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-0"
                >
                  <span class="text-dBlue font-bold">Umum</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0 fill-dBlue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-0"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-0"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <ul class="w-full border-gray-600">
                    <li>
                      <router-link
                        to="/"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Beranda
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/profil"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Profil
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/berita"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Berita
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Menu Mobile 0 -->

              <!-- Menu Mobile 1 -->
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span class="text-dBlue font-bold">Kemahasiswaan</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0 fill-dBlue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <ul class="w-full border-gray-600">
                    <li>
                      <router-link
                        to="/kemahasiswaan"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Agenda Mahasiswa</router-link
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Organisasi Mahasiswa</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Prestasi Mahasiswa</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Panduan Kemahasiswaan</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Pusat Karir</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Pusat Inkubator Bisnis</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Menu Mobile 1 -->

              <!-- Menu Mobile 2 -->
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span class="text-dBlue font-bold">Humas</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0 fill-dBlue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <ul class="w-full border-gray-600">
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Agenda Kehumasan</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Keprotokoleran</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Publikasi Media</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Menu Mobile 2 -->

              <!-- Menu Mobile 3 -->
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span class="text-dBlue font-bold">Perencanaan Pengembangan</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0 fill-dBlue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <ul class="w-full border-gray-600">
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Renstra Universitas</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Rencana Kerja UNW</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Monev Kegiatan & Anggara</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Legalitas PT & PS</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >SIDOAKRE</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Menu Mobile 3 -->

              <!-- Menu Mobile 4 -->
              <h2 id="accordion-collapse-heading-4">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500"
                  data-accordion-target="#accordion-collapse-body-4"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-4"
                >
                  <span class="text-dBlue font-bold">Download</span>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0 fill-dBlue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-4"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-4"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <ul class="w-full border-gray-600">
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Undang-Undang</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Peraturan-Peraturan</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 hover:text-hover hover:font-bold text-link"
                        >Surat Edaran</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Menu Mobile 4 -->
            </div>
            <!-- End Mobile Menu -->
          </div>
          <!-- End Hoverable Link-->
        </div>
        <!-- End Menu  -->
      </div>
    </nav>
  </div>
  <!-- End Nav Content -->
</template>

<script>
export default {
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        const uri = this.$route.path.indexOf(path) === 0;
        // console.log(path);
        return uri; // current path starts with this path string
      });
    },

    isActive(path) {
      const rout = this.$route.path === path;
      return rout;
    },
  },
};
</script>

<style>
.active {
  font-weight: 600;
  color: black;
}
/* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
}

/* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.hoverable {
  position: static;
}

.hoverable > a:after {
  font-family: FontAwesome;
  content: "\f0d7";
  font-size: 15px;
  padding-left: 1px;
  position: relative;
  top: -1px;
}
.hoverable > a:hover:after {
  font-family: FontAwesome;
  content: "\f0de";
  font-size: 15px;
  padding-left: 1px;
  position: relative;
  top: 1px;
}

.hoverable:hover .mega-menu {
  display: block;
}

.mobile {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
}

@media (max-width: 640px) {
  .hoverable:hover .mega-menu {
    display: none;
  }
  .hoverable:hover .mobile {
    display: block;
  }
}
</style>
