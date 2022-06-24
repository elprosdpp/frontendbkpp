import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ProfilView from '../views/ProfilView.vue';


import Wrapper from '@/components/profil/WrapProfil.vue';
import TupoksiView from '@/components/profil/TupoksiBidang.vue';
import StrukBkpp from '@/components/profil/StrukturBkpp.vue';


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
    component: Wrapper,
    children: [
      {
        path: 'struktur',
        name: "struktur",
        meta: { title: 'Struktur BKAPP - BKPPUNW' },
        component: StrukBkpp
      },
      {
        path: 'tupoksi',
        name: "tupoksi-bidang",
        meta: { title: 'Tupoksi Bidang - BKPPUNW' },
        component: TupoksiView
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})


const DEFAULT_TITLE = 'BKPP UNW';
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
