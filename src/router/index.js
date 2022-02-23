import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CartMain from "../views/CartMain.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CartMain',
    name: 'CartMain',
    component: CartMain
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
