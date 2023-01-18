import { createApp } from 'vue'
import App from './App.vue'
import Item from './components/Item.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/main.css'

createApp(App).mount('#app')
createApp(Item).mount('#item')
