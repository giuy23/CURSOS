import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "../pages/AboutView.vue";
import HomeView from "../pages/HomeView.vue";
import ContactView from "../pages/ContactView.vue";
import ServicesView from "../pages/ServicesView.vue";

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/service',
    name: 'service',
    component: ServicesView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router