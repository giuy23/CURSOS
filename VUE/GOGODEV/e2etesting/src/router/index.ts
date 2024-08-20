import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailVIew from "../views/DetailVIew.vue";
import LoginVIew from "../views/LoginVIew.vue";
import { useAuthStore } from "../store/useAuth";

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requiredAuth: true
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailVIew,
    meta:{
      requiredAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVIew,
    meta:{
      requiredAuth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
}
)

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  if (!store.isAuth && to.meta.requiredAuth) {
    next('login')
  } else {
    next()
  }
})


export default router;