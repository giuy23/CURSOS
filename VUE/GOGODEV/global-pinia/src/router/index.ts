import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import FirebaseView from "../views/FirebaseView.vue";
import HomeView from "../views/HomeView.vue";

const routes:Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  // {
  //   path: '/counter',
  //   name: 'counter',
  //   component: HomeView
  // },
  // {
  //   path: '/',
  //   name: '',
  //   component: 
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;