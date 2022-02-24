import { createApp } from 'vue'
import App from './App.vue'
import Eva from './components/Eva.vue'
import Countdown from 'vue3-flip-countdown'
import { createWebHistory, createRouter } from "vue-router";
import RichardVue from './components/Richard.vue';


const routes = [
    { path: '/', component: RichardVue },
    { path: '/hvisevaikkefinderenvindersnartfaldersneenigen', component: Eva },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory("/"),
    routes, // short for `routes: routes`
})
  
const app = createApp(App)

app.use(Countdown)
app.use(router)
app.mount('#app')

