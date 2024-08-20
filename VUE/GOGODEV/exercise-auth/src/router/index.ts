import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import DashboardView from "../views/DashboardView.vue"
import Register from "../components/Register.vue"

import { useAuthStore } from "../store/AuthStore"
import {getInLocalStorage} from "../utils/saveTokenLS"

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth : false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth : false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requireAuth : false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth : true
    }
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  //PINIA
  const store = useAuthStore();
  const token_storage = getInLocalStorage('TOKEN_AUTH');
  
  if (token_storage) {
    store.savedTokenAuth(token_storage)
    return next()
  }
  // const auth = store.TOKEN_AUTH;
  const needAuth = to.meta.requireAuth;

  if (needAuth && token_storage) {
    return next('login')
  } else {
    next()
  }

})

export default router;