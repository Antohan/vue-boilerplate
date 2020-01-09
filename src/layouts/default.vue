<template>
  <section>
    <header>
      <router-link :to="{ name: 'home' }">
        Home
      </router-link>

      <router-link :to="{ name: 'about' }">
        About
      </router-link>
    </header>

    <div>
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style lang="scss" module>
</style>
