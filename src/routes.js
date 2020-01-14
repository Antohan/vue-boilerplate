import Vue from 'vue';
import Router from 'vue-router';

import { clientRoutes } from './features/client';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home-page" */'./pages/home-page'),
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about-page" */'./pages/about-page'),
      meta: {
        layout: 'default',
      },
    },
    ...clientRoutes,
  ],
});
