import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ServiceView from "../views/ServiceView.vue";
import BlogView from "../views/BlogView.vue";
import PostView from "../views/PostView.vue";

const routes: Array<RouteRecordRaw> = [
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
    path: '/services',
    name: 'services',
    component: ServiceView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:id',
    name: 'post',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router