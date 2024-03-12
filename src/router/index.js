import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import CategoryView from '@/views/CategoryView.vue'


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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/:category_slug/:product_slug',
      name: 'ProductDetail',
      component: ProductView,
    },
    {
      path: '/:category_slug/',
      name: 'CategoryDetail',
      component: CategoryView,
    },
    {
      path: '/cart/',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/signup/',
      name: 'signup',
      component: () => import('@/views/SignUp.vue'),
    },
    {
      path: '/log-in/',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
  ]
})

export default router
