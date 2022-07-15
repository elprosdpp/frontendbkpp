import { vueRouter, createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';

// Langsung Panggil Home View
import HomeView from '../views/HomeView.vue';

// Routes Group Profil
import Profil from '../views/profil/WrapProfilView.vue';
import Struktur from '../views/profil/StrukturView.vue';
import Tupoksi from '../views/profil/TupoksiView.vue';

// Routes Group Berita
import Berita from '../views/berita/BeritaView.vue';
import Detail from '../views/berita/DetailBeritaView.vue';

// Routes Group Kemahasiswaan
import Kemahasiswaan from '../views/kemahasiswaan/WrapKemahasiswaanView.vue';
import Agenda from '../views/kemahasiswaan/AgendaMahasiswaView.vue';
import Organisasi from '../views/kemahasiswaan/organisasiMahasiswa/OrganisasiMahasiswaView.vue';

// ORGANISASI MAHASISWA GROUP
import IntroOrmawaView from '../views/kemahasiswaan/organisasiMahasiswa/IntroOrmawaView.vue';
import DetailOrmawaView from '../views/kemahasiswaan/organisasiMahasiswa/DetailOrmawaView.vue';
// END ORGANISASI MAHASISWA GROUP

import Prestasi from '../views/kemahasiswaan/PrestasiMahasiswaView.vue';

// PANDUAN MAHASISWA GROUP
import Panduan from '../views/kemahasiswaan/panduanMahasiswa/PanduanMahasiswaView.vue';
import ListPanduan from '../views/kemahasiswaan/panduanMahasiswa/ListPanduanView.vue'
import DetailPanduan from '../views/kemahasiswaan/panduanMahasiswa/DetailPanduanView.vue'
// END PANDUAN MAHASISWA GROUP

// GROUP PUSAT KARIR
import Karir from '../views/kemahasiswaan/pusatKarir/PusatKarirView.vue';
import Tracer from '../views/kemahasiswaan/pusatKarir/TracerStudyView.vue';
import InfoKerja from '../views/kemahasiswaan/pusatKarir/InfoLowonganKerjaView.vue';
import layananKonseling from '../views/kemahasiswaan/pusatKarir/LayananKonselingView.vue';
// GROUP PUSAT KARIR

import Bisnis from '../views/kemahasiswaan/pusatInkubator/PusatInkubatorBisnisView.vue';

// Routes Group HumasPusatInkubatorBisnisView
import Humas from '../views/humas/WrapHumasView.vue';
import AgendaHumas from '../views/humas/AgendaKehumasanView.vue';
import Keprotokoleran from '../views/humas/KeprotokoleranView.vue';
import PublikasiMedia from '../views/humas/PublikasiMediaView.vue';


const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomeView,
    meta: { title: 'Beranda - BKPPUNW' },
  },

  {
    path: '/profil',
    redirect: {
      path: '/profil/struktur'
    },
    component: Profil,
    children: [
      {
        path: 'struktur',
        name: "struktur",
        meta: { title: 'Struktur BKAPP - BKPPUNW' },
        component: Struktur
      },
      {
        path: 'tupoksi',
        name: "tupoksi-bidang",
        meta: { title: 'Tupoksi Bidang - BKPPUNW' },
        component: Tupoksi
      }
    ]
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita,
    meta: { title: 'Berita - BKPPUNW' },
    children: [
    ]
  },
  {
    path: '/berita/d/:slug',
    name: "detailberita",
    component: Detail
  },
  {
    path: '/kemahasiswaan',
    redirect: {
      path: '/kemahasiswaan/agendaMahasiswa'
    },
    component: Kemahasiswaan,
    children: [
      {
        path: '/kemahasiswaan/agendaMahasiswa',
        name: "AgendaMahasiswa",
        meta: { title: 'Agenda Kemahasiswaan - BKPPUNW' },
        component: Agenda
      },
      {
        path: '/kemahasiswaan/organisasiMahasiswa/',
        name: "OrganisasiMahasiswa",
        meta: { title: 'Organisasi Kemahasiswaan - BKPPUNW' },
        component: Organisasi,
        children: [
          {
            path: '',
            name: 'OrganisasiMahasiswa.introOrmawa',
            component: IntroOrmawaView,
          },
          {
            path: ':slug',
            name: 'OrganisasiMahasiswa.DetailOrmawa',
            component: DetailOrmawaView,
          },
        ]
      },
      {
        path: '/kemahasiswaan/prestasiMahasiswa',
        name: "PrestasiMahasiswa",
        meta: { title: 'Prestasi Kemahasiswaan - BKPPUNW' },
        component: Prestasi
      },
      {
        path: '/kemahasiswaan/panduanMahasiswa/',
        name: "PanduanMahasiswa",
        meta: { title: 'Panduan Kemahasiswaan - BKPPUNW' },
        component: Panduan,
        children: [
          {
            path: '',
            name: 'ListPanduanmMhasiswa.ListPanduan',
            component: ListPanduan,
          },
          {
            path: ':slug',
            name: 'PanduanMahasiswa.DetailPanduan',
            component: DetailPanduan,
          },
        ]
      },
      {
        path: '/kemahasiswaan/pusatKarir',
        name: "PusatKarir",
        redirect: {
          path: '/kemahasiswaan/pusatKarir/tracerStudi'
        },
        component: Karir,
        children: [
          {
            path: '/kemahasiswaan/pusatKarir/tracerStudi',
            name: 'Tracer Study',
            component: Tracer,
            meta: { title: 'Tracer Study - BKPPUNW' },
          },
          {
            path: '/kemahasiswaan/pusatKarir/InfoLowonganKerja',
            name: 'Info Lowongan Kerja',
            component: InfoKerja,
            meta: { title: 'Info Lowongan Kerja - BKPPUNW' },
          },
          {
            path: '/kemahasiswaan/pusatKarir/layananKonseling',
            name: 'Layanan Konseling',
            component: layananKonseling,
            meta: { title: 'Layanan Konseling - BKPPUNW' },
          },
        ]
      },
      {
        path: '/kemahasiswaan/inkubatorBisnis',
        name: "InkubatorBisnis",
        meta: { title: 'Pusat Inkubator Bisnis - BKPPUNW' },
        component: Bisnis
      },
    ]
  },
  {
    path: '/humas',
    redirect: {
      path: '/humas/agendaKehumasan'
    },
    component: Humas,
    children: [
      {
        path: '/humas/agendaKehumasan',
        name: "AgendaKehumasan",
        meta: { title: 'Agenda Kehumasan - BKPPUNW' },
        component: AgendaHumas
      },
      {
        path: '/humas/keprotokoleran',
        name: "Keprotokoleran",
        meta: { title: 'Keprotokoleran - BKPPUNW' },
        component: Keprotokoleran
      },
      {
        path: '/humas/publikasiMedia',
        name: "PublikasiMedai",
        meta: { title: 'Publikasi Media - BKPPUNW' },
        component: PublikasiMedia
      },
    ]
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: "exact-active",
  // scrollBehavior() {
  //   document.getElementById('app').scrollIntoView({ behavior: "smooth" });
  // }
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default router
