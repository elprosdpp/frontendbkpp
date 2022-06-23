import { useRouter, useRoute, createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import TupoksiView from '../views/TupoksiView.vue'


const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HomeView,
  },

  {
    path: '/profil',
    name: 'profil',
    component: ProfilView,
    children: [
      {
        path: 'tupoksi-bidang',
        name: "tupoksi-bidang",
        component: TupoksiView
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.name}`
  next()
})

export default router
