import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes:Array<RouteRecordRaw> =  [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

//VERIFICA ESTO ANTES DE INICIALIZAR CUALQUIER RUTA
router.beforeEach((to, from, next) => {
  const auth = true;
  const needAuth = to.meta.requireAuth;

  if (needAuth && !auth) {
    next('login')
  } else {
    next()
  }
  // const auth = store.jwt != null;
  // OR
  // const auth = getAuth().currentUser;
})

export default router;