import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
// import ElementPlus from './plugins/element-plus'

import './assets/style/main.scss'

createApp(App).use(router).mount('#app')
