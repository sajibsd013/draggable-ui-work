import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('~/pages/login.vue')
    },
    {
      name: 'create',
      path: '/create',
      component: () => import('~/pages/create.vue')
    },
    {
      name: 'profile',
      path: '/profile',
      component: () => import('~/pages/profile.vue')
    }
  ],
}