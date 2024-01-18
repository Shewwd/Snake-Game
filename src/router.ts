import { createRouter, createWebHistory } from 'vue-router';

import Game from './components/game/Game.vue'

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Game }
  ],
});