const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  isAuth: false,
};

const mutations = {
  [LOGIN]: (state, payload) => {
    state.isAuth = payload;
  },
  [LOGOUT]: (state, payload) => {
    state.isAuth = payload;
  },
};

const actions = {
  login({ commit }, payload) {
    commit(LOGIN, payload);
  },
  logout({ commit }, payload) {
    commit(LOGOUT, payload);
  },
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
};
