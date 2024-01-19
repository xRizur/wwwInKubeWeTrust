<template>
  <header>
    <div class="main-header bg-white shadow-md p-4 flex justify-between items-center">
      <router-link to="/">
        <div class="logo">
          <img src="../../assets/images/brand/brand-logo.png" alt="Logo" class="h-10 w-auto">
        </div>
      </router-link>

      <nav class="space-x-4">
        <router-link to="/" class="text-gray-600 hover:text-purple-600">Home</router-link>
        <router-link to="/about-us" class="text-gray-600 hover:text-purple-600">O Nas</router-link>
        <router-link to="/customer-service" class="text-gray-600 hover:text-purple-600">Customer Service</router-link>

        <router-link v-if="isLogged" to="/userprofile" class="text-gray-600 hover:text-purple-600">Moje
          konto</router-link>
        <button v-if="isLogged" @click.prevent="logout" class="p-3 bg-red-500 text-white rounded">Wyloguj się</button>

        <router-link v-else to="/login" class="cta bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Sign
          In</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLogged: !!localStorage.getItem('token')
    };
  },
  name: 'MainNavbar',
  methods: {
    logout() {
      localStorage.removeItem('token');
      axios.defaults.headers.common['Authorization'] = null;
      this.$router.push('/');
    }
  },
  watch: {
    '$route': function () {
      this.isLogged = !!localStorage.getItem('token');
    }
  }
}
</script>
