import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";
import FirebaseView from "../views/FirebaseView.vue";
import SocialView from "../views/SocialView.vue"
import AwsView from "../views/AwsView.vue";

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialView
  },
  {
    path: '/aws',
    name: 'aws',
    component: AwsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;