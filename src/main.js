import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'voie-pages'

import App from './App.vue'

import './assets/style/main.scss'

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
