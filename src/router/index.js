import { useRouter, useRoute, createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import TupoksiView from '../views/TupoksiView.vue'


const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomeView,
    meta: { title: 'Beranda - BKPPUNW' },
  },

  {
    path: '/profil',
    name: 'profil',
    component: ProfilView,
    meta: { title: 'Profil - BKPPUNW' },
    children: [
      {
        path: 'tupoksi-bidang',
        name: "tupoksi-bidang",
        meta: { title: 'Tupoksi Bidang - BKPPUNW' },
        component: TupoksiView
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
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
