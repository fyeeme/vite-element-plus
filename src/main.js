import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

// "Design in DevTools"
import 'virtual:windi-devtools'
import 'virtual:windi.css'

createApp(App).use(router).mount('#app')
