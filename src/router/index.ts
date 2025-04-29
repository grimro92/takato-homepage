import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/hobby',
      name: 'Hobby',
      component: () => import('../views/HobbyView.vue'),
    },
    {
      path: '/overseas',
      name: 'Overseas',
      component: () => import('../views/OverseasView.vue'),
    },
    {
      path: '/likes',
      name: 'Likes',
      component: () => import('../views/LikesView.vue'),
    },
    {
      path: '/links',
      name: 'Links',
      component: () => import('../views/LinksView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
  ],
})

export default router
