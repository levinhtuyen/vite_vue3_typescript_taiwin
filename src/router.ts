import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'DefaultLayout',
    // redirect: '/homepage',
    component: () => import('~/layouts/default.vue'),
    children: [
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
