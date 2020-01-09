import Vue from 'vue';
import App from './App';
import router from './routes';
import store from './vuex';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
