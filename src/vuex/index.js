import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import auth from '@/features/auth/vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
});
