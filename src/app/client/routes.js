

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-page" */'@/app/client/pages/home-page.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about-page" */'@/app/client/pages/about-page.vue'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
