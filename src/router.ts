import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
  ],
});