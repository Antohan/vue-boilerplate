<template>
  <section>
    <header :class="$style.header">
      <img
        :class="$style.logo"
        src="@/assets/logo.png"
        alt="logo"
      >

      <nav :class="$style.nav">
        <router-link
          :to="{ name: 'home' }"
          :class="$style.navigateLink"
          :active-class="$style.activeLink"
          exact
        >
          Home
        </router-link>

        <router-link
          :to="{ name: 'about' }"
          :class="$style.navigateLink"
          :active-class="$style.activeLink"
          exact
        >
          About
        </router-link>
      </nav>

      <app-login />
    </header>

    <div :class="$style.pageContent">
      <router-view/>
    </div>
  </section>
</template>

<script>
import LoginComponent from '@/features/auth/components/login';

export default {
  name: 'DefaultLayout',
  components: {
    'app-login': LoginComponent,
  },
};
</script>

<style module>
.header {
  padding: 0 20px;
  box-shadow: 0 0 10px var(--shadow-color);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 70%;
  transform: rotate(-90deg);
}

.nav {
  width: 100%;
  max-width: 960px;
  margin: 20px;

}

.navigateLink:not(:last-child) {
  margin-right: 20px;
}

.activeLink {
  color: var(--primary-color);
}

.pageContent {
  width: 100%;
  max-width: 1024px;
  margin: auto;
}
</style>
