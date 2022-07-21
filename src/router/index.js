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

// GROUP PUSAT INKUBATOR BISNIS
import Bisnis from '../views/kemahasiswaan/pusatInkubator/PusatInkubatorBisnisView.vue';
import StrukturInkubator from '../views/kemahasiswaan/pusatInkubator/StrukturPusatInkubatorView.vue';
import KegiatanBidang from '../views/kemahasiswaan/pusatInkubator/kegiatanBidang/KegiatanBidangView.vue';
import ListKegiatanBidang from '../views/kemahasiswaan/pusatInkubator/kegiatanBidang/ListKegiatanBidangView.vue';
import DetailKegiatanBidang from '../views/kemahasiswaan/pusatInkubator/kegiatanBidang/DetailKegiatanBidangView.vue';
// END GROUP PUSAT INKUBATOR BISNIS

// GROUP HUMAS
import Humas from '../views/humas/WrapHumasView.vue';
import AgendaHumas from '../views/humas/agendaHumas/AgendaKehumasanView.vue';
import DetailAgenda from '../views/humas/agendaHumas/DetailAgendaHumasView.vue';
import WrapAgenda from '../views/humas/agendaHumas/WrapAgendaHumasView.vue';
import Keprotokoleran from '../views/humas/KeprotokoleranView.vue';
import PublikasiMedia from '../views/humas/PublikasiMediaView.vue';
// END GROUP HUMAS

// ROUTE GROUP PERENCAAN PENGEMBANGAN
import WrapRencana from '../views/rencanaPengembangan/WrapRencanaPengembanganView.vue'
import Renstra from '../views/rencanaPengembangan/RenstraUniversitasView.vue'
// END ROUTE GROUP PERENCANAAN PENGEMBANGAN


const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomeView,
    meta: { title: 'Beranda - BKAPP' },
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
        meta: { title: 'Struktur BKAPP - BKAPP' },
        component: Struktur
      },
      {
        path: 'tupoksi',
        name: "tupoksi-bidang",
        meta: { title: 'Tupoksi Bidang - BKAPP' },
        component: Tupoksi
      }
    ]
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita,
    meta: { title: 'Berita - BKAPP' },
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
        meta: { title: 'Agenda Kemahasiswaan - BKAPP' },
        component: Agenda
      },
      {
        path: '/kemahasiswaan/organisasiMahasiswa/',
        name: "OrganisasiMahasiswa",
        meta: { title: 'Organisasi Kemahasiswaan - BKAPP' },
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
        meta: { title: 'Prestasi Kemahasiswaan - BKAPP' },
        component: Prestasi
      },
      {
        path: '/kemahasiswaan/panduanMahasiswa/',
        name: "PanduanMahasiswa",
        meta: { title: 'Panduan Kemahasiswaan - BKAPP' },
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
            meta: { title: 'Tracer Study - BKAPP' },
          },
          {
            path: '/kemahasiswaan/pusatKarir/InfoLowonganKerja',
            name: 'Info Lowongan Kerja',
            component: InfoKerja,
            meta: { title: 'Info Lowongan Kerja - BKAPP' },
          },
          {
            path: '/kemahasiswaan/pusatKarir/layananKonseling',
            name: 'Layanan Konseling',
            component: layananKonseling,
            meta: { title: 'Layanan Konseling - BKAPP' },
          },
        ]
      },
      {
        path: '/kemahasiswaan/inkubatorBisnis',
        name: "InkubatorBisnis",
        meta: { title: 'Pusat Inkubator Bisnis - BKAPP' },
        redirect: {
          path: '/kemahasiswaan/pusatKarir/StrukturOrganisasi',
        },
        component: Bisnis,
        children: [
          {
            path: '/kemahasiswaan/pusatKarir/StrukturOrganisasi',
            name: 'Struktur Organsasi Pusat Inkubator Bisnis',
            component: StrukturInkubator,
            meta: { title: 'Struktur Organsasi Pusat Inkubator Bisnis - BKAPP' },
          },
          {
            path: '/kemahasiswaan/pusatKarir/KegiatanBidang/',
            name: 'Kegiatan Bidang',
            component: KegiatanBidang,
            meta: { title: 'Kegiatan Bidang - BKAPP' },
            children: [
              {
                path: '/kemahasiswaan/pusatKarir/KegiatanBidang/',
                name: 'List Kegiatan Bidang',
                component: ListKegiatanBidang,
              },
              {
                path: ':id',
                name: 'Detail Kegiatan',
                component: DetailKegiatanBidang,
              },
            ]
          },
        ]
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
        meta: { title: 'Agenda Kehumasan - BKAPP' },
        component: WrapAgenda,
        children: [
          {
            path: '/humas/agendaKehumasan',
            name: 'Agenda Kehumasan',
            component: AgendaHumas,
          },
          {
            path: ':slug',
            name: 'Detail Agenda Humas',
            component: DetailAgenda,
          }
        ],
      },
      {
        path: '/humas/keprotokoleran',
        name: "Keprotokoleran",
        meta: { title: 'Keprotokoleran - BKAPP' },
        component: Keprotokoleran
      },
      {
        path: '/humas/publikasiMedia',
        name: "Publikasi Media",
        meta: { title: 'Publikasi Media - BKAPP' },
        component: PublikasiMedia
      },
    ]
  },
  {
    path: '/rencanaPengembangan',
    redirect: {
      path: '/rencanaPengembangan/renstraUniversitas'
    },
    component: WrapRencana,
    children: [
      {
        path: '/rencanaPengembangan/renstraUniversitas',
        name: 'Renstra Universitas',
        component: Renstra,
        meta: { title: 'Renstra Universitas - BKAPP' },
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
