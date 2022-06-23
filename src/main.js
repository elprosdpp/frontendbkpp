import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import '../node_modules/flowbite';
import './assets/style.css'

// import './hooper/dist/hooper.css'

createApp(App).use(router).mount('#app')
