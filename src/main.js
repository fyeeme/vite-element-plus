import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from './plugins/element-plus'

import './assets/style/main.scss'

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')
