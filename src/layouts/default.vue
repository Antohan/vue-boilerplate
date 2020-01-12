<template>
  <section>
    <header>
      <router-link
        :to="{ name: 'home' }"
        :active-class="$style.activeLink"
        exact
      >
        Home
      </router-link>

      <router-link
        :to="{ name: 'about' }"
        :active-class="$style.activeLink"
        exact
      >
        About
      </router-link>
    </header>

    <div>
      <router-view/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style module>
.activeLink {
  color: var(--primary-color);
}
</style>
