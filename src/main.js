import Vue from 'vue';
import App from './App';
import router from './routes';
import store from './vuex';
import './api/http-client';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
