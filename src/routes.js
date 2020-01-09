import Vue from 'vue';
import Router from 'vue-router';

import { clientRoutes } from '@/app/client';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...clientRoutes,
  ],
});
