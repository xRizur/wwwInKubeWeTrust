
<template>
  <div id="app">
    <MainNavbar />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>

<style>
/* Możesz tutaj umieścić globalne style dla Twojej aplikacji */
</style>
