<template>
  <div>
    <switch-button
      :value="isAuth"
      @input="onLoginClick"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('auth');

export default {
  name: 'Login',
  computed: mapState({
    isAuth: state => state.isAuth,
  }),
  methods: {
    ...mapActions(['login', 'logout']),
    onLoginClick(value) {
      if (value) {
        this.login(value);
      } else {
        this.logout(value);
      }
    },
  },
};
</script>

<style scoped>

</style>
