import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from '@/views/LandingPage.vue';
// import Alternatives from '@/views/Alternatives.vue';
import FourOFour from '@/views/FourOFour.vue';

import "@/assets/main.scss";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'Home', path: '/', component: LandingPage },
    // { name: 'Alternatieven', path: '/alternatives', component: Alternatives },
    { name: 'Pagina niet gevonden', path: '/:pathMath(.*)*', component: FourOFour },
  ]
});

router.afterEach((to) => {
  document.title = to.name ? 'CBR - ' + to.name.toString() : 'CBR';
})

const app = createApp(App);
app.use(router);
app.mount('#app');
