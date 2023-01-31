import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import storage from '@/storage'

createApp(App)
.use(router)
.use(VueAxios, axios)
.use(storage)
.mount('#app')
