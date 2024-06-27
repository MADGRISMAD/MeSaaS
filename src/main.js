import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; // Asegúrate de importar tus estilos de Tailwind aquí

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUtensils, faEnvelope, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUtensils, faEnvelope, faCog, faSignOutAlt,);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
