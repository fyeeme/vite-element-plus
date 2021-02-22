import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/pages/users/Index.vue')
  },
  {
    path: '/users/:id',
    name: 'users-id',
    component: () => import('@/pages/users/Detail.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
