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
        meta: { title: 'Agenda Mahasiswa - BKPPUNW' },
        component: Agenda
      },
      {
        path: '/kemahasiswaan/organisasiMahasiswa',
        name: "OrganisasiMahasiswa",
        meta: { title: 'Organisasi Mahasiswa - BKPPUNW' },
        component: Organisasi
      }
    ]
  },


]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})



export default router
