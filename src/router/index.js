import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Securityonion from '../views/Securityonion.vue'
import Ccna from '../views/Ccna.vue'
import Spiderman from '../views/Spiderman.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
    {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
    {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
    {
    path: '/securityonion',
    name: 'securityonion',
    component: Securityonion
  },
    {
    path: '/ccna',
    name: 'ccna',
    component: Ccna
  },
    {
    path: '/spiderman',
    name: 'spiderman',
    component: Spiderman
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
