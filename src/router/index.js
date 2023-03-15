import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Meldingen from '../views/Meldingen'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/meldingen',
    name: 'meldingen',
    component: Meldingen
  },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
