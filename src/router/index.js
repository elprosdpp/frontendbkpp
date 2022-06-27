import { vueRouter, createRouter, createWebHistory } from 'vue-router'

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
import Organisasi from '../views/kemahasiswaan/OrganisasiMahasiswaView.vue';
import Prestasi from '../views/kemahasiswaan/PrestasiMahasiswaView.vue';
import Panduan from '../views/kemahasiswaan/PanduanMahasiswaView.vue';
import Karir from '../views/kemahasiswaan/PusatKarirView.vue';
import Bisnis from '../views/kemahasiswaan/PusatInkubatorBisnisView.vue';

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
        name: "agendaMahasiswa",
        meta: { title: 'Agenda Kemahasiswaan - BKPPUNW' },
        component: Agenda
      },
      {
        path: '/kemahasiswaan/organisasiMahasiswa',
        name: "OrganisasiMahasiswa",
        meta: { title: 'Organisasi Kemahasiswaan - BKPPUNW' },
        component: Organisasi
      },
      {
        path: '/kemahasiswaan/prestasiMahasiswa',
        name: "PrestasiMahasiswa",
        meta: { title: 'Prestasi Kemahasiswaan - BKPPUNW' },
        component: Prestasi
      },
      {
        path: '/kemahasiswaan/panduanMahasiswa',
        name: "PanduanMahasiswa",
        meta: { title: 'Panduan Kemahasiswaan - BKPPUNW' },
        component: Panduan
      },
      {
        path: '/kemahasiswaan/pusatKarir',
        name: "PusatKarir",
        meta: { title: 'Pusat Karir - BKPPUNW' },
        component: Karir
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
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: "smooth" });
  }
})



export default router
