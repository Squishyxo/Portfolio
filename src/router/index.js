import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Skills2 from '../views/Skills2.vue'
import Securityonion from '../views/Securityonion.vue'
import Ccna from '../views/Ccna.vue'
import Wazuh from '../views/Wazuh.vue'
import Smb from '../views/Smb.vue'
import Alerts from '../views/Alerts.vue'
import Frontend from '../views/Frontend.vue'
import Darkweb from '../views/Darkweb.vue'
import Docker from '../views/Docker.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
    path: '/skills2',
    name: 'skills2',
    component: Skills2
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
    path: '/wazuh',
    name: 'wazuh',
    component: Wazuh
  },
  {
    path: '/smb',
    name: 'smb',
    component: Smb
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: Alerts
  },
  {
    path: '/frontend',
    name: 'frontend',
    component: Frontend
  },
  {
    path: '/darkweb',
    name: 'darkweb',
    component: Darkweb
  },
  {
    path: '/docker',
    name: 'docker',
    component: Docker
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
