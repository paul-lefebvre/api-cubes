import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage'
import LoginPage from '@/views/LoginPage'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
  path: "/:catchAll(.*)",
  component: NotFound,
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
