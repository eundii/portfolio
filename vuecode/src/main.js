import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "aos/dist/aos.css";

// scss
import '@/assets/scss/style.scss'

createApp(App).use(router).mount('#app')
