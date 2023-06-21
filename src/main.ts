import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from '@/views/LandingPage.vue';
import Alternatives from '@/views/Alternatives.vue';
import Information from '@/views/Information.vue';
import Enquete from '@/views/Enquete.vue';
import EnqueteResults from '@/views/EnqueteResults.vue';
import InputTest from '@/views/InputTest.vue';
import FourOFour from '@/views/FourOFour.vue';

import "@/assets/main.scss";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: '', path: '/', component: LandingPage },
    { name: 'Alternatieven', path: '/alternatives', component: Alternatives },
    { name: 'Alternatief Informatie', path: '/:alternative-information', component: Information},
    { name: 'Enquête', path: '/enquete', component: Enquete },
    { name: 'enquete resultaten', path: '/results', component: EnqueteResults },
    { name: 'input test', path: '/inputs', component: InputTest },
    { name: 'Pagina niet gevonden', path: '/:pathMath(.*)*', component: FourOFour },
  ]
});

router.afterEach((to) => {
  document.title = to.name ? 'CBR - ' + to.name.toString() : 'CBR';

  if (document.title === "CBR - Alternatief Informatie") {
    const alternative = to.path.split("-")[0];
    document.title = `CBR - ${alternative.substring(1)} Informatie`;
  }
})

const app = createApp(App);
app.use(router);
app.mount('#app');
