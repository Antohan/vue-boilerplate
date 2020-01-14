const routes = [
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "client-page" */'./pages/client-page'),
    meta: {
      layout: 'default',
    },
  },
];

export default routes;
