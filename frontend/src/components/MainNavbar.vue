<template>
    <header>
      <div class="main-header bg-white shadow-md p-4 flex justify-between items-center">
        <router-link to="/">
  <div class="logo">
    <img src="../assets/images/brand/brand-logo.png" alt="Logo" class="h-10 w-auto">
  </div>
</router-link>


        <nav class="space-x-4">
          <router-link to="/" class="text-gray-600 hover:text-purple-600">Home</router-link>
          <router-link to="/about-us" class="text-gray-600 hover:text-purple-600">About Us</router-link>
          <router-link to="/customer-service" class="text-gray-600 hover:text-purple-600">Customer Service</router-link>
          <router-link to="/sign-up" class="cta bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Sign In</router-link>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  name: 'MainNavbar',
}
</script>