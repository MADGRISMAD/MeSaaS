import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Messages from '../views/Messages.vue';
import Settings from '../views/Settings.vue';
import Logout from '../views/Logout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/messages', component: Messages },
  { path: '/settings', component: Settings },
  { path: '/logout', component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
