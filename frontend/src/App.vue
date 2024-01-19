
<template>
  <div id="app">
    <MainNavbar />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './components/MainLayout/MainNavbar.vue';
import MainFooter from './components/MainLayout/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>

<style>
</style>
