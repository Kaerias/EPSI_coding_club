// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/layouts/default/Login.vue'
import Modules from "@/modules/modules.routes";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      ...Modules
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
